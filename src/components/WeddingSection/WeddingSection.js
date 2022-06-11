import "./WeddingSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function WeddingSection() {
  return (
    <section id="the-wedding">
      <div class="container">
        {/* <!-- ROW-1 --> */}
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center">
            <div class="section-title animation fadeInUp">
              <h2>LA BODA</h2>

              <p class="blurb">
                Aquí tienes toda la información que necesitas conocer para no
                perderos el evento del año. ¡Os esperamos!
              </p>

              <HeartDivider />
            </div>
          </div>
        </div>

        {/* <!-- ROW-2 --> */}
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            {/* <!-- ITEM-1 --> */}
            <div class="wedding-item col-md-5 animation fadeIn">
              {/* <!--PHOTO-ITEM--> */}
              <div class="photo-item">
                {/* <!--PHOTO--> */}
                <img
                  src="assets/images/iglesia.jpg"
                  alt=""
                  class="hover-animation image-zoom-in"
                />

                {/* <!--PHOTO OVERLAY--> */}
                <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                <div class="layer wh95 border-photo-caption fade-out"></div>

                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">
                      <a
                        href="https://goo.gl/maps/heaiC136sZss8xUZA"
                        class="de-button outline small"
                      >
                        OBTÉN LA DIRECCIÓN
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="title-excerpt" style={{ backgroundColor: "#f6f6f6" }}>
                <h3>
                  <a href="https://goo.gl/maps/heaiC136sZss8xUZA">
                    LA CEREMONIA
                  </a>
                </h3>
                <div>
                  <p>La ceremonia se celebrará en:</p>
                  <h4 style={{ textAlign: "center" }}>
                    <a href="https://goo.gl/maps/heaiC136sZss8xUZA">
                      Iglesia de SANTA MARINA, Sarria
                    </a>
                  </h4>
                  <h4 style={{ textAlign: "center" }}>Hora: 13:00</h4>
                </div>
              </div>
            </div>

            {/* <!-- ITEM-2 --> */}
            <div class="wedding-item col-md-5 animation delay1 fadeIn">
              {/* <!--PHOTO-ITEM--> */}
              <div class="photo-item">
                {/* <!--PHOTO--> */}
                <img
                  src="assets/images/finca-fortaleza.jpg"
                  alt=""
                  class="hover-animation image-zoom-in"
                  style={{ maxHeight: "200px" }}
                />

                {/* <!--PHOTO OVERLAY--> */}
                <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                <div class="layer wh95 border-photo-caption fade-out"></div>

                {/* <!--ICON LINK--> */}
                <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                  <div class="alignment">
                    <div class="v-align center-middle">
                      <a
                        href="https://goo.gl/maps/hyxuptiPyeJq17TM7"
                        class="de-button outline small"
                      >
                        OBTÉN LA DIRECCIÓN
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- TITLE & EXCERPT --> */}
              <div class="title-excerpt" style={{ backgroundColor: "#f6f6f6" }}>
                <h3>
                  <a href="https://goo.gl/maps/hyxuptiPyeJq17TM7">LA FIESTA</a>
                </h3>
                <div>
                  <p>Seguiremos con la fiesta en:</p>
                  <h4 style={{ textAlign: "center" }}>
                    <a href="https://goo.gl/maps/hyxuptiPyeJq17TM7">
                      Finca 'A FORTALEZA', Lugo
                    </a>
                  </h4>
                  <h4 style={{ textAlign: "center", visibility: "hidden" }}>
                    Finca 'A FORTALEZA', Lugo
                  </h4>
                </div>
              </div>
              {/* <!-- END of TITLE & EXCERPT --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingSection;
