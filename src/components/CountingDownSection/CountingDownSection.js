import "./CountingDownSection.css";
import HeartDivider from "../HeartDivider/HeartDivider";

import Countdown from "react-countdown";

function CountingDownSection() {
  return (
    <section id="location-countdown">
      <div
        class="image-divider auto-height"
        style={{ backgroundImage: "url(assets/images/torredenunez.jpg)" }}
      >
        <div class="divider-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-10 text-center">
              <div
                class="banner-text light medium"
                style={{ letterSpacing: "3px" }}
              >
                <h4>*** FINCA A FORTALEZA, LUGO ***</h4>
              </div>

              <div class="">
                <div id="counting-down">
                  <div id="counting">Cuenta</div>
                  <div id="down">Atrás</div>
                </div>
              </div>

              <HeartDivider isWhite />

              <div id="countdown" class="simple-countdown animation fadeInUp">
                <Countdown date={Date(2022, 13, 8)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountingDownSection;
