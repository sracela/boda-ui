import "./MoreInfoSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function MoreInfoSection() {
  return (
    <section id="the-wedding-info" style={{ marginBottom: "32px" }}>
      <div class="container">
        {/* <!-- ROW-1 --> */}
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center">
            <div class="section-title animation fadeInUp">
              <h2>INFORMACIÓN IMPORTANTE</h2>

              <p class="blurb">
                ¿Necesitas alojamiento, quieres saber más sobre el servicio de
                autobuses, o tienes alguna necesidad especial con el menú? Esta
                es tu sección.
              </p>

              <HeartDivider />
            </div>
          </div>
        </div>

        {/* <!-- ROW-2 --> */}
        <div class="row">
          <div class="col-md-offset-1 col-md-12">
            <div class="container-fluid">
              <div class="row">
                {/* <!-- ITEM-1 --> */}
                <div class="wedding-item col-md-4 animation fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/autobus.jpg"
                      alt=""
                      class="hover-animation image-zoom-in"
                      style={{ maxHeight: "240px" }}
                    />

                    {/* <!--PHOTO OVERLAY--> */}
                    <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                    <div class="layer wh95 border-photo-caption fade-out"></div>

                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment">
                        {/* <div class="v-align center-middle">
                          <a
                            href="https://goo.gl/maps/heaiC136sZss8xUZA"
                            class="de-button outline small"
                          >
                            OBTÉN LA DIRECCIÓN
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div class="title-excerpt">
                    <h3>AUTOBUSES</h3>
                    <div>
                      <p>
                        Os pedimos que, si estáis interesados en coger el
                        autobús reservéis vuestro sitio.
                      </p>
                      <h4 style={{ textAlign: "center" }}>
                        SARRIA-LUGO (ida y vuelta)
                      </h4>
                      <p>¡Con enviarnos un mensaje es suficiente! </p>
                      <h5>Avisar 15 días antes</h5>
                    </div>
                  </div>
                </div>

                {/* <!-- ITEM-2 --> */}
                <div class="wedding-item col-md-4 animation delay1 fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/finca-hotel.jpg"
                      alt=""
                      class="hover-animation image-zoom-in"
                    />

                    {/* <!--PHOTO OVERLAY--> */}
                    <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                    <div class="layer wh95 border-photo-caption fade-out"></div>

                    {/* <!--ICON LINK--> */}
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment"></div>
                    </div>
                  </div>

                  {/* <!-- TITLE & EXCERPT --> */}
                  <div class="title-excerpt">
                    <h3>ALOJAMIENTO</h3>
                    <div>
                      <p>
                        Desde finca 'A FORTALEZA', por ser nuestros invitados,
                        os hacen un descuento si queréis alojaros en su hotel.
                      </p>
                      <p>Enviadnos un mensaje si esto os interesa.</p>
                      <p>
                        ¡No espereis al último momento, que las habitaciones
                        vuelan!
                      </p>
                    </div>
                  </div>
                  {/* <!-- END of TITLE & EXCERPT --> */}
                </div>

                {/* <!-- ITEM-3 --> */}
                <div class="wedding-item col-md-4 animation delay2 fadeIn">
                  {/* <!--PHOTO-ITEM--> */}
                  <div class="photo-item">
                    {/* <!--PHOTO--> */}
                    <img
                      src="assets/images/formatted/vegan.webp"
                      alt=""
                      class="hover-animation image-zoom-in"
                      style={{ maxHeight: "295px" }}
                    />

                    {/* <!--PHOTO OVERLAY--> */}
                    <div class="layer wh95 hidden-black-overlay hover-animation fade-in"></div>

                    <div class="layer wh95 border-photo-caption fade-out"></div>

                    {/* <!--ICON LINK--> */}
                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                      <div class="alignment"></div>
                    </div>
                  </div>

                  {/* <!-- TITLE & EXCERPT --> */}
                  <div class="title-excerpt">
                    <h3>MENÚ ESPECIAL</h3>
                    <div>
                      <p>
                        ¿Eres vegano o vegetariano o tienes alguna intolerancia?
                      </p>
                      <p>No dudes en hacérnoslo saber.</p>

                      <h5>Avisar 1 mes antes</h5>
                    </div>
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

export default MoreInfoSection;
