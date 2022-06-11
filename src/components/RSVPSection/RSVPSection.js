import "./RSVPSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import { FaHeart } from "react-icons/fa";

function RSVPSection() {
  return (
    <section id="rsvp">
      <div class="container">
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center ">
            <div class="section-title animation fadeInUp">
              <HeartDivider isWhite />
              <h2 style={{ color: "#FFF" }}>CONTÁCTANOS</h2>
              <p>
                Si no puedes venir, o si necesitas contactar con nosotros por el
                menú, el alojamiento o por cualquier otra cosa, aquí te dejamos
                nuestro contacto.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <div class="col-md-offset-1 col-md-5">
              <div class="de-icon circle medium-size aligncenter">
                <FaHeart />
              </div>
              <h3 style={{ color: "#fff" }} class="text-center">
                Paula Hospido Castro
              </h3>
              <div class="blurb text-center">
                <p>610613738</p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="de-icon circle medium-size aligncenter">
                <FaHeart />
              </div>
              <h3 style={{ color: "#fff" }} class="text-center">
                Martín López López
              </h3>
              <div class="blurb text-center">
                <p>646181078</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
