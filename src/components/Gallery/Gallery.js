import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import HeartDivider from "../HeartDivider/HeartDivider";
import { Link, Outlet } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

function Gallery() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [filenames, setFilenames] = useState([]);
  const [images, setImages] = useState([]);

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
    ["images", filenames],
    () => fetchImages(filenames),
    {
      // The query will not execute until the filenames > 0
      enabled: filenames.length > 0,
    }
  );
  const getFilenamesQuery = useQuery(["filenames"], fetSignedUrl);

  useEffect(() => {
    if (getImagesQuery.isSuccess && getImagesQuery.data?.length > 0) {
      setImages(
        getImagesQuery.data.map((p, idx) => ({
          filename: filenames[idx],
          data: p.data,
        }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getImagesQuery]);

  useEffect(() => {
    if (getFilenamesQuery.isSuccess && getFilenamesQuery.data.data) {
      setFilenames(getFilenamesQuery.data.data.map((a) => a.Key));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFilenamesQuery.isSuccess]);

  return (
    <section id="gallery" style={{ marginBottom: "54px" }}>
      {!isMobile && <Nav isDefault />}

      <div className="container">
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
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {!getImagesQuery.isSuccess ? (
                  <div>Cargando...</div>
                ) : (
                  images.length !== 0 &&
                  images.map((image, idx) => (
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      key={`image-${image.filename.split("/")[1]}-${idx}`}
                    >
                      {image.data !== "error" && (
                        <Link
                          to={"image-view"}
                          state={{
                            filename: image.filename.split("thumbnails/").pop(),
                          }}
                        >
                          <img
                            src={`data:image/jpeg;base64,${image.data}`}
                            alt={image.filename.split("thumbnails/").pop()}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                            }}
                          />
                        </Link>
                      )}
                    </div>
                  ))
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
