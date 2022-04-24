import "./CoupleSection.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function CoupleSection() {
  return (
    <section id="couple">
      <div class="container">
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-offset-1 col-md-10 text-center">
            <div class="section-title">
              <h1>LA PAREJITA</h1>

              <p class="blurb">
                Somos Paula y Martín y estamos muy contentos de poder compartir
                esta noticia con vosotros.
              </p>

              <HeartDivider />
            </div>
          </div>

          {/* <!-- SECTION CONTENT --> */}
          <div class="col-md-offset-1 col-md-5">
            {/* <!--PHOTO-ITEM--> */}
            <div class="photo-item">
              {/* <!--HIS-PHOTO--> */}
              <img
                src="assets/images/formatted/him.webp"
                alt=""
                class="hover-animation image-zoom-in"
              />

              {/* <!--PHOTO OVERLAY--> */}
              <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

              {/* <!--PHOTO CAPTION--> */}
              <div class="layer wh95 border-photo-caption hover-animation fade-out">
                <div class="alignment">
                  <div class="v-align center-bottom">
                    <div>
                      <div
                        class="banner-text light small"
                        style={{ letterSpacing: "3px" }}
                      >
                        <h4>EL NOVIO</h4>
                        <h4>MARTÍN LÓPEZ LÓPEZ</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--END of PHOTO CAPTION--> */}

              {/* <!--ICON LINK--> */}
              <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                <div class="alignment"></div>
              </div>
              {/* <!--END of ICON LINK--> */}
            </div>
            {/* <!--END of PHOTO-ITEM--> */}

            <p class="couple-excerpt" style={{visibility: 'hidden'}}>Depués de tantos años de complicidad, apoyo incondicional y sobretodo mucho amor, hemos decidido dar el paso.</p>
          </div>

          <div class="col-md-5">
            {/* <!--PHOTO-ITEM--> */}
            <div class="photo-item">
              {/* <!--HER-PHOTO--> */}
              <img
                src="assets/images/formatted/her.webp"
                alt=""
                class="hover-animation image-zoom-in"
              />

              {/* <!--PHOTO OVERLAY--> */}
              <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>
              {/* <!--END of PHOTO OVERLAY--> */}

              {/* <!--PHOTO CAPTION--> */}
              <div class="layer wh95 border-photo-caption hover-animation fade-out">
                <div class="alignment">
                  <div class="v-align center-bottom">
                    <div>
                      
                      <div
                        class="banner-text light small"
                        style={{ letterSpacing: "3px" }}
                      >
                        
                        <h4>LA NOVIA</h4>
                        <h4>PAULA HOSPIDO CASTRO</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--END of PHOTO CAPTION--> */}

              {/* <!--ICON LINK--> */}
              <div class="layer wh95 hidden-link hover-animation delay1 fade-in">
                <div class="alignment"></div>
              </div>
              {/* <!--END of ICON LINK--> */}
            </div>
            {/* <!--END of PHOTO-ITEM-->   */}

            <p class="couple-excerpt animation fadeInRight" style={{visibility: 'hidden'}}>
              A continuación de contamos todo lo que necesitas saber. Pero además si necesitas contactarnos directamente, abajo de todo tienes nuestros teléfonos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
