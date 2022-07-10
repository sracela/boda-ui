import "./AddYourMusic.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "react-responsive";
import { IS_MOBILE_MAX_WIDTH } from "../../utils/common";

function AddYourMusic() {
  const isMobile = useMediaQuery(IS_MOBILE_MAX_WIDTH);
  return (
    <section id="add-your-music">
      {!isMobile && <Nav isDefault />}
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title animation fadeInUp">
              <HeartDivider />
              <h2>¿QUIERES SER EL DJ DE LA BODA?</h2>
              <p>
                Hemos creado una lista compartida en Spotify para que entre
                todos nos ayudéis a escoger la música que sonorá en el día más
                importante de nuestras vidas.
              </p>
              <p>
                ¡No queremos que falte ninguna de nuestras canciones favoritas!
              </p>
              <p>
                Para compartir tú música, aquí debajo te dejamos un enlace a la
                lista de Spotify.
              </p>
              <div>
                <Button link="https://open.spotify.com/playlist/6KTKFm9k8nLLy3L1zqN81n?si=07147486697e44be&pt=d0b93a18a632300fcb4f1c33d8fa7182">
                  ¡HAZ CLICK Y COMPÁRTENOS TUS CANCIONES!
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

export default AddYourMusic;
