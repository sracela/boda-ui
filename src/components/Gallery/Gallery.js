import React, { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import HeartDivider from "../HeartDivider/HeartDivider";
import { Link, Outlet } from "react-router-dom";
import { useInfiniteScroll } from "../../utils/hooks";

import { useQuery } from "@tanstack/react-query";

function Gallery() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [filenames, setFilenames] = useState([]);
  const [filenamesToFetch, setFilenamesToFetch] = useState([]);
  const [images, setImages] = useState([]);
  const filenameIndex = useRef();

  const fetchImages = async (filenames) => {
    try {
      return await Promise.all(
        filenames.map((filename) =>
          axios.get(".netlify/functions/get-image", {
            params: { filename },
          })
        )
      );
    } catch (e) {
      console.log("e", e);
    }
  };

  const fetSignedUrl = async () => {
    return await axios.get(".netlify/functions/list-images");
  };

  const getImagesQuery = useQuery(
    ["images", filenamesToFetch],
    () => fetchImages(filenamesToFetch),
    {
      // The query will not execute until the filenamesToFetch > 0
      enabled: filenamesToFetch.length > 0,
    }
  );
  const getFilenamesQuery = useQuery(["filenames"], fetSignedUrl);

  const hasMore = () => {
    if (filenameIndex.current === undefined) return true;
    return filenameIndex.current < filenames.length;
  };

  const handleFetchMore = () => {
    if (getImagesQuery.isLoading) return;
    setFilenamesToFetch(
      filenames.slice(filenameIndex.current, filenameIndex.current + 20)
    );
    filenameIndex.current += 20;
  };

  useInfiniteScroll({
    loading: getImagesQuery.isLoading,
    handleLoad: handleFetchMore,
    hasMore: hasMore(),
  });

  useEffect(() => {
    if (getImagesQuery.isSuccess && getImagesQuery.data?.length > 0) {
      const tempImages = getImagesQuery.data.map((p, idx) => ({
        filename:
          filenameIndex.current !== 20
            ? filenames[filenameIndex.current - 20 + idx]
            : filenames[idx],
        data: p.data,
      }));
      setImages([...images, ...tempImages]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getImagesQuery.isSuccess]);

  useEffect(() => {
    if (getFilenamesQuery.isSuccess && getFilenamesQuery.data.data) {
      const tempFilenames = getFilenamesQuery.data.data.map((a) => a.Key);
      setFilenames(tempFilenames);
      setFilenamesToFetch(tempFilenames.slice(0, 20));
      filenameIndex.current = 20;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFilenamesQuery.isSuccess]);

  return (
    <section id="gallery">
      {!isMobile && <Nav isDefault />}

      <div className="container" style={{ marginBottom: "54px" }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title animation fadeInUp"></div>
            <HeartDivider />
            <h2>GALERÍA DE LA BODA</h2>
            <p>
              Aquí puedes ir viendo las fotos de la boda que otros invitados han
              subido.
            </p>
            <p>¡Esperamos que hayas salido muy guapo o guapa!</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                gap: "100px",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "0.5rem",
                }}
              >
                {images.length !== 0 &&
                  images.map((image, idx) => {
                    return image.data !== "error" ? (
                      <Link
                        to={"image-view"}
                        state={{
                          filename: image.filename.split("thumbnails/").pop(),
                        }}
                        key={`${image.filename
                          .split("thumbnails/")
                          .pop()}-${idx}}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`data:image/jpeg;base64,${image.data}`}
                          alt={image.filename.split("thumbnails/").pop()}
                          style={{
                            width: "100%",
                            height: "160px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    ) : (
                      <p>Error</p>
                    );
                  })}
                {getImagesQuery.isLoading && <p>Cargando...</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Nav />}
      <Outlet />
    </section>
  );
}

export default Gallery;
