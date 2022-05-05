import { useState } from "react";
import "./AddPhotosSection.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import { Link } from "react-router-dom";

function AddPhotosSection() {
  const [selectedFiles, setSelectedFiles] = useState(undefined);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <section id="main-slider" class="flexslider" style={{ height: "100vh" }}>
      {/* MAIN SLIDER TITLE OUTTER WRAPPER */}
      <div class="slide-title-coming-soon-outter-wrapper">
        {/* MAIN SLIDER TITLE INNER WRAPPER */}
        <div class="slide-title-coming-soon-inner-wrapper">
          {/* TITLE */}
          <div class="slide-title-coming-soon align-middle">
            <div class="container">
              <div class="row">
                <div class="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                  <HeartDivider />
                  <div style={{ letterSpacing: "3px" }}>
                    <h4 style={{ color: "#035959" }}>¡NOS CASAMOS!</h4>
                  </div>
                  <div id="save-the-date">
                    <div id="save">Paula</div>
                    <div id="the-date">y Martín</div>
                    <div id="date">
                      - 13<span class="pink-dot">.</span>08
                      <span class="pink-dot">.</span>22 -
                    </div>
                  </div>

                  <div
                    class="banner-text medium"
                    style={{ letterSpacing: "3px" }}
                  >
                    <h5 style={{ color: "#035959" }}>SARRIA, LUGO</h5>
                  </div>
                  <div>

                    <label class="de-button medium animation fadeInUp">
                      <input type="file" onChange={selectFile} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddPhotosSection;
