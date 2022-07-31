import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

function ImgView() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [image, setImage] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log("filename", state.filename);

  const getImage = async (filename) => {
    return await axios.get("/.netlify/functions/get-image", {
      params: { filename },
    });
  };

  const getImageQuery = useQuery(["getImage", state.filename], () =>
    getImage(state.filename)
  );

  useEffect(() => {
    if (getImageQuery.isSuccess && getImageQuery.data) {
      setImage(getImageQuery.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getImageQuery.isSuccess]);

  return (
    <section
      id="gallery"
      style={{
        background: "black",
        display: "grid",
        placeItems: "center",
        height: isMobile ? "90vh" : "100%",
      }}
    >
      {!isMobile && <Nav isDefault />}
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
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
                  position: "relative",
                }}
              >
                {getImageQuery.isError ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100vh",
                      color: "white",
                      display: "grid",
                      placeContent: "center",
                    }}
                  >
                    <p>Ups! No se puede cargar esta imagen...</p>
                  </div>
                ) : getImageQuery.isSuccess ? (
                  <>
                    <img
                      src={`data:image/jpeg;base64,${image.data}`}
                      alt={"whatever"}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100vh",
                      color: "white",
                      display: "grid",
                      placeContent: "center",
                    }}
                  >
                    <p>Cargando...</p>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    top: isMobile ? 0 : "100px",
                    right: 0,
                    zIndex: 10,
                    padding: "8px",
                    margin: "8px",
                    background: "#FFFFFF70",
                    borderRadius: "25%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/galeria")}
                >
                  <FaTimes size={26} color="black" />
                </div>
                {/* <h3>Name: {imgId}</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Nav />}
    </section>
  );
}

export default ImgView;
