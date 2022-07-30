import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function ImgView() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get("/.netlify/functions/get-image", {
        params: { filename: state.filename },
      });
      setImage(res);
      setLoading(false);
    };
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="gallery" style={{ marginBottom: "54px", background: "black" }}>
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
                {loading ? (
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
                ) : (
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
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
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
                      <FaTimes size={26} />
                    </div>
                  </>
                )}
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
