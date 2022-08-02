import React, { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import HeartDivider from "../HeartDivider/HeartDivider";
import { Outlet } from "react-router-dom";
import { useInfiniteScroll } from "../../utils/hooks";

import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";
import ImgView from "../ImgView/ImgView";

const IMAGE_NUMBER = 18;

function Gallery() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [imageUrl, setImageUrl] = useState("");
  const [filenames, setFilenames] = useState([]);
  const [filenamesToFetch, setFilenamesToFetch] = useState([]);
  const [images, setImages] = useState([]);
  const filenameIndex = useRef(undefined);

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
    if (getImagesQuery.isLoading || getFilenamesQuery.isLoading) return;
    setFilenamesToFetch(
      filenames.slice(
        filenameIndex.current,
        filenameIndex.current + IMAGE_NUMBER
      )
    );
    filenameIndex.current += IMAGE_NUMBER;
  };

  useInfiniteScroll({
    loading: getImagesQuery.isLoading || getFilenamesQuery.isLoading,
    handleLoad: handleFetchMore,
    hasMore: hasMore(),
  });

  useEffect(() => {
    if (getImagesQuery.isSuccess && getImagesQuery.data?.length > 0) {
      const tempImages = getImagesQuery.data.map((p, idx) => ({
        filename:
          filenameIndex.current !== IMAGE_NUMBER
            ? filenames[filenameIndex.current - IMAGE_NUMBER + idx]
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
      if (filenameIndex.current === undefined) {
        setFilenamesToFetch(tempFilenames.slice(0, IMAGE_NUMBER));
        filenameIndex.current = IMAGE_NUMBER;
      } else {
        setFilenamesToFetch(
          filenames.slice(
            filenameIndex.current,
            filenameIndex.current + IMAGE_NUMBER
          )
        );
        filenameIndex.current += IMAGE_NUMBER;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFilenamesQuery.isSuccess]);

  if (imageUrl)
    return <ImgView imageUrl={imageUrl} onCancel={() => setImageUrl("")} />;

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
                  marginBottom: "4rem",
                }}
              >
                {images.length !== 0 &&
                  images.map((image, idx) => {
                    return image.data !== "error" ? (
                      <div
                        // to={"image-view"}
                        // state={{
                        //   filename: image.filename.split("thumbnails/").pop(),
                        // }}
                        onClick={() =>
                          setImageUrl(
                            `https://paula-test.s3.us-east-2.amazonaws.com/${image.filename
                              .split("thumbnails/")
                              .pop()}`
                          )
                        }
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
                      </div>
                    ) : (
                      <p>Error</p>
                    );
                  })}
                {getImagesQuery.isLoading && (
                  <div
                    style={{
                      width: "100%",
                      gridColumn: "1/-1",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReactLoading
                      type={"spinningBubbles"}
                      color={"#035959"}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
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
