import "./UploadImages.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";

function UploadImages() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  return (
    <section id="add-your-music">
      {!isMobile && <Nav isDefault />}
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title animation fadeInUp">
              <HeartDivider />
              <h2>COMPARTE TUS FOTOS</h2>
              <p>
                Nos encantaría ver las fotos que habéis sacado durante el
                evento. ¡Imaginaos la de recuerdos que podemos juntar de esta
                manera!
              </p>
              <p>
                Nos hace mucha ilusión ver el evento desde todos los ángulos
                posibles. Pero para ello necesitamos vuestra ayuda.
              </p>
              <p>
                Si quieres compartirnos tus fotos, abajo te dejamos un enlace a
                Drive. Si puedes crear una carpeta con tu nombre y subir todas
                las fotos ahí sería ideal. Así sabremos qué fotos nos compartís
                cada uno.
              </p>
              <div>
                <Button link="https://drive.google.com/drive/folders/1QCDH0nZhDuM0JafhHj6tmgIAdrpBpz_M?usp=sharing">
                  ¡HAZ CLICK Y COMPÁRTENOS TUS FOTOS!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && <Nav />}
    </section>
  );
}

export default UploadImages;
