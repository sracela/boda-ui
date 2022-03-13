import "./WeddingSection.css";
import HeartDivider from "../HeartDivider/HeartDivider";

import Countdown from "react-countdown";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing
              </p>

              <HeartDivider />
            </div>
          </div>
        </div>

        {/* <!-- ROW-2 --> */}
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <div class="container-fluid">
              <div class="row">
                {/* <!-- ITEM-1 --> */}
                <div class="wedding-item col-md-4 animation fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/the-wedding-1a.jpg"
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
                            href="http://demo.dethemes.com/forever/versions/top-bottom-bar/location.html"
                            class="de-button outline small"
                          >
                            OBTÉN LA DIRECCIÓN
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="title-excerpt">
                    <h3>
                      <a href="http://demo.dethemes.com/forever/versions/top-bottom-bar/location.html">
                        IGLESIA
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer ultrices malesuada ante quis pharetra. Nullam non{" "}
                    </p>
                  </div>
                </div>

                {/* <!-- ITEM-2 --> */}
                <div class="wedding-item col-md-4 animation delay1 fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/the-wedding-4a.jpg"
                      alt=""
                      class="hover-animation image-zoom-in"
                    />

                    {/* <!--PHOTO OVERLAY--> */}
                    <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                    <div class="layer wh95 border-photo-caption fade-out"></div>

                    {/* <!--ICON LINK--> */}
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        <div class="v-align center-middle">
                          <a
                            href="http://demo.dethemes.com/forever/versions/top-bottom-bar/gift.html"
                            class="de-button outline small"
                          >
                            SABER MÁS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- TITLE & EXCERPT --> */}
                  <div class="title-excerpt">
                    <h3>
                      <a href="http://demo.dethemes.com/forever/versions/top-bottom-bar/gift.html">
                        COMIDA
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer ultrices malesuada ante quis pharetra. Nullam non{" "}
                    </p>
                  </div>
                  {/* <!-- END of TITLE & EXCERPT --> */}
                </div>

                {/* <!-- ITEM-3 --> */}
                <div class="wedding-item col-md-4 animation delay2 fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/accomodation.jpg"
                      alt=""
                      class="hover-animation image-zoom-in"
                    />

                    {/* <!--PHOTO OVERLAY--> */}
                    <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                    <div class="layer wh95 border-photo-caption fade-out"></div>

                    {/* <!--ICON LINK--> */}
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        <div class="v-align center-middle">
                          <a
                            href="http://demo.dethemes.com/forever/versions/top-bottom-bar/accomodation.html"
                            class="de-button outline small"
                          >
                            SABER MÁS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- TITLE & EXCERPT --> */}
                  <div class="title-excerpt">
                    <h3>
                      <a href="http://demo.dethemes.com/forever/versions/top-bottom-bar/accomodation.html">
                        FIESTA
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer ultrices malesuada ante quis pharetra. Nullam non{" "}
                    </p>
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

export default WeddingSection;
