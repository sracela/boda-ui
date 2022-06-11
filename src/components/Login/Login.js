import "./Login.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import { Link } from "react-router-dom";

function ComingSoonSection({ handleClick }) {
  return (
    <section
      id="main-slider"
      className="flexslider"
      style={{ height: "100vh" }}
    >
      {/* MAIN SLIDER TITLE OUTTER WRAPPER */}
      <div className="slide-title-coming-soon-outter-wrapper">
        {/* MAIN SLIDER TITLE INNER WRAPPER */}
        <div className="slide-title-coming-soon-inner-wrapper">
          {/* TITLE */}
          <div className="slide-title-coming-soon align-middle">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6 animation delay1 fadeInUp">
                  <HeartDivider />
                  <div style={{ letterSpacing: "3px" }}>
                    <h4 style={{ color: "#035959" }}>¡NOS CASAMOS!</h4>
                  </div>
                  <div id="save-the-date">
                    <div id="save">Paula</div>
                    <div id="the-date">y Martín</div>
                    <div id="date">
                      - 13<span className="pink-dot">.</span>08
                      <span className="pink-dot">.</span>22 -
                    </div>
                  </div>

                  <div
                    className="banner-text medium"
                    style={{ letterSpacing: "3px" }}
                  >
                    <h5 style={{ color: "#035959" }}>SARRIA, LUGO</h5>
                  </div>
                  <div>
                    <Link to="/">
                      <span className="de-button medium animation fadeInUp">
                        ENTRAR
                      </span>
                    </Link>
                  </div>

                  {/* <div
                      class="banner-text dark medium"
                      style={{ letterSpacing: "3px" }}
                    >
                    SARRIA, LUGO
                    </div> */}
                  {/* <HeartDivider /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonSection;
