import React from "react";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import Nav from "../Nav/Nav";
import { FaTimes } from "react-icons/fa";

function ImgView({ imageUrl, onCancel }) {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);

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
                <img
                  src={imageUrl}
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
                  onClick={onCancel}
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
