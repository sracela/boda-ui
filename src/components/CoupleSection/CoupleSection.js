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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultrices malesuada ante quis pharetra. Nullam non bibendum
                dolor. Ut vel turpis accumsan, efficitur dolor fermentum,
                tincidunt metus.
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
                src="assets/images/him.png"
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
                      <HeartDivider noLines/>
                      <div
                        class="banner-text light small"
                        style={{ letterSpacing: "3px" }}
                      >
                        <h4>*** EL NOVIO ***</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--END of PHOTO CAPTION--> */}

              {/* <!--ICON LINK--> */}
              <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                <div class="alignment">
                  <div class="v-align center-middle">
                    <a
                      class="de-button outline medium"
                    >
                      ABOUT HIM
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--END of ICON LINK--> */}
            </div>
            {/* <!--END of PHOTO-ITEM-->                                     */}

            <p class="couple-excerpt">
              <strong>Martín López López. </strong>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer ultrices malesuada ante quis
              pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan,
              efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices
              nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.
            </p>
          </div>

          <div class="col-md-5">
            {/* <!--PHOTO-ITEM--> */}
            <div class="photo-item">
              {/* <!--HER-PHOTO--> */}
              <img
                src="assets/images/her.png"
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
                      <HeartDivider noLines/>
                      <div
                        class="banner-text light small"
                        style={{ letterSpacing: "3px" }}
                      >
                        <h4>*** THE BRIDE ***</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--END of PHOTO CAPTION--> */}

              {/* <!--ICON LINK--> */}
              <div class="layer wh95 hidden-link hover-animation delay1 fade-in">
                <div class="alignment">
                  <div class="v-align center-middle">
                    <a
                      class="de-button outline medium"
                    >
                      ABOUT HER
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--END of ICON LINK--> */}
            </div>
            {/* <!--END of PHOTO-ITEM-->   */}

            <p class="couple-excerpt animation fadeInRight">
              <strong>Paula Hospido Castro. </strong>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer ultrices malesuada ante quis
              pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan,
              efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices
              nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
