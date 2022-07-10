import "./UploadImages.modules.css";
import { useState, useEffect } from "react";
import HeartDivider from "../HeartDivider/HeartDivider";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function UploadImages() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) setUsername(savedUsername);
    document.getElementById("firstName").focus();
  }, []);

  const handleUploadImages = () => {
    if (!username.includes("-")) {
      let myuuid = nanoid();
      localStorage.setItem("username", username + "-" + myuuid);
    }
    navigate("subir");
  };

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
                Nos hace mucha ilusión ver el evento desde todos los ángulos
                posibles. Pero para ello necesitamos tu ayuda.
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
                    Si quieres compartirnos las fotos
                    <strong>
                      {" "}
                      primero has de escribirnos aquí abajo tu nombre.{" "}
                    </strong>
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
                    autoFocus
                    value={username.split("-")[0]}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='"El tío Manolo"'
                  />

                  <p style={{ margin: 0 }}>
                    <strong>
                      ¡No podrás compartir fotos hasta que escribas tu nombre!
                    </strong>
                  </p>
                </div>
                <Button
                  isDefault
                  onClick={handleUploadImages}
                  isDisabled={!!!username}
                >
                  ¡HAZ CLICK Y COMPÁRTENOS TUS FOTOS!
                </Button>
                <p style={{ marginBottom: "0px" }}>O también puedes...</p>

                <div>
                  <Link to="/galeria">
                    <span className="de-button medium animation fadeInUp inverted">
                      VER LAS FOTOS QUE OTROS HAN SUBIDO YA
                    </span>
                  </Link>
                </div>
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
