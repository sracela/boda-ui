import "./RSVPSection.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function RSVPSection() {
  return (
    <section id="rsvp">
      <div class="container">
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center ">
            <div class="section-title animation fadeInUp">
              <HeartDivider />

              <h2>¿VIENES?</h2>

              <p>
                Lorem ipsum dolor sit
                amet, consectetur adipiscing
              </p>

              <a
                href="http://demo.dethemes.com/forever/versions/top-bottom-bar/rsvp-1.html"
                class="de-button medium animation fadeInUp"
              >
                CONTÁCTANOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
