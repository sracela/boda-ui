import "./AddYourMusic.modules.css";
import HeartDivider from "../HeartDivider/HeartDivider";
import Button from "../Button/Button";

function AddYourMusic() {
  return (
    <section id="add-your-music">
      <div class="container">
        <div class="row">
          {/* <!-- SECTION TITLE --> */}
          <div class="col-md-12 text-center ">
            <div class="section-title animation fadeInUp">
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
                <Button link="https://open.spotify.com/playlist/6KTKFm9k8nLLy3L1zqN81n?si=218d64cbbc4a4e89&pt=0a92da0aac07e8587d4e74e12da849c7">
                  ¡HAZ CLICK Y COMPÁRTENOS TUS CANCIONES!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddYourMusic;
