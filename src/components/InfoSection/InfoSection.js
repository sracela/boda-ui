import "./InfoSection.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";

function InfoSection() {
  return (
    <section id="info">
      <div class="container">
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center ">
            <div class="section-title animation fadeInUp">
              <HeartDivider />
              <h2>ENCANTADOS DE DARTE LA BIENVENIDA</h2>
              <p>
                Esta es la app de nuestra Boda. Aquí encontrarás un montón de
                información importante sobre el lugar, los horarios, el menú,
                los novios... y muchas cosas más!
              </p>
              <p>
                Pero sssh! No podemos desvelar nada hasta unos días antes de la
                boda.
              </p>
              <p>
                {" "}
                Guarda la fecha y no te olvides de entrar unos días antes.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
