import "./UploadImages.modules.css";
import { useState, useEffect } from "react";
import HeartDivider from "../HeartDivider/HeartDivider";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";

function UploadImages() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [username, setUsername] = useState("");

  useEffect(() => {
    document.getElementById("firstName").focus();
  }, []);
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
              {/* <p>
                Si quieres compartirnos tus fotos, abajo te dejamos un enlace a
                Drive. Si puedes crear una carpeta con tu nombre y subir todas
                las fotos ahí sería ideal. Así sabremos qué fotos nos compartís
                cada uno.
              </p> */}

              <div>
                {/* <Button link="https://drive.google.com/drive/folders/1QCDH0nZhDuM0JafhHj6tmgIAdrpBpz_M?usp=sharing">
                  ¡HAZ CLICK Y 
                  COMPÁRTENOS TUS FOTOS!
                </Button> */}
                <div
                  style={{
                    display: "flex",
                    padding: "0 20px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Si quieres compartirnos tus fotos,
                    <strong> has de decirnos quién eres. </strong> Así sabremos
                    qué fotos nos compartís cada uno.
                  </p>

                  <label htmlFor="firstName" className="label">
                    <p style={{ margin: 0 }}>
                      <small>
                        Prueba por ejemplo con Juan, "el tío Manolo" o "la mejor
                        madrina del mundo"
                      </small>
                    </p>
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    autofocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='"El tío Manolo"'
                  />

                  <p style={{ margin: 0 }}>
                    <strong>
                      ¡No podrás compartir fotos hasta que nos indiques tu
                      nombre!
                    </strong>
                  </p>
                </div>
                <Button isDefault onClick={() => null} isDisabled={!!!username}>
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
