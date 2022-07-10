import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import HeartDivider from "../HeartDivider/HeartDivider";

function Gallery() {
  // const { upload } = useUploader();
  // const handleOnSubmit = (values) => {
  //   console.log(values.files);
  //   values.files.map((f) => upload(f));
  // };

  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [filenames, setFilenames] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetSignedUrl = async () => {
      const res = await axios.get(".netlify/functions/list-images");
      setFilenames(res.data.map((a) => a.Key));
    };
    fetSignedUrl();
  }, []);

  useEffect(() => {
    if (filenames.length > 0) {
      const fetchImages = async (filenames) => {
        setLoading(true);
        try {
          const promises = await Promise.all(
            filenames.map((filename) =>
              axios.get(".netlify/functions/get-image", {
                params: { filename },
              })
            )
          );
          setImages(
            promises.map((p, idx) => ({
              filename: filenames[idx],
              data: p.data,
            }))
          );
        } catch (e) {
          console.log("e", e);
        }

        setLoading(false);
      };
      fetchImages(filenames);
    }
  }, [filenames]);

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
                {loading ? (
                  <div>Cargando...</div>
                ) : (
                  images.length !== 0 &&
                  images.map((image, idx) => (
                    <div
                      style={{ width: "100%", height: "auto" }}
                      key={`image-${image.filename}-${idx}`}
                    >
                      {image.data !== "error" && (
                        <img
                          src={`data:image/jpeg;base64,${image.data}`}
                          alt={image.filename}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
                          // style={{
                          //   maxWidth: "100%",
                          //   maxHeight: "100%",
                          //   height: "auto",
                          // }}
                        />
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
    </section>
  );
}

export default Gallery;
