import PreguntasEs from "./PreguntasEs";
import img1 from "../img/tv.png";
import img2 from "../img/mobile-0819.jpg";
import img3 from "../img/boxshot.png";
import img4 from "../img/device-pile.png";
import img5 from "../img/niños.png";
import video1 from "../img/video-tv-0819.mp4";
import video2 from "../img/video-devices.mp4";

function MainEs() {
  return (
    <main className="main">
      <section className="main-contenedor">
        <div className="main-flex max-width">
          <div>
            <h2 className="header-texto__title header-texto__title--margin">
              Disfruta en tu TV.
            </h2>
            <p className="header-texto__parrafo">
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              reproductores de Blu-ray y más.
            </p>
          </div>
          <div className="main-animacion">
            <img className="main-animacion__img" src={img1} alt="televicion" />
            <video
              playsInline
              muted
              loop
              autoPlay
              className="main-animacion_video"
              src={video1}
            />
          </div>
        </div>
      </section>

      <section className="main-contenedor">
        <div className="main-flex max-width">
          <div>
            <h2 className="header-texto__title header-texto__title--margin">
              Descarga tus series para verlas offline.
            </h2>
            <p className="header-texto__parrafo">
              Guarda tu contenido favorito y tendrás siempre algo para ver.
            </p>
          </div>
          <div className="main-animacion">
            <img className="main-animacion__img" src={img2} alt="mobile-0819" />
            <div className="main-loading">
              <img className="main-loading__boxshot" src={img3} alt="boxshot" />
              <div>
                <p className="main-loading__negrita">Stranger Things</p>
                <span className="main-loading__azul">Descargando...</span>
              </div>
              <div className="main-iconos">
                <i className="fas fa-download main-iconos__download" />
                <i className="fas fa-mobile-alt main-iconos__mobile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-contenedor">
        <div className="main-flex max-width">
          <div>
            <h2 className="header-texto__title header-texto__title--margin">
              Disfruta donde quieras.
            </h2>
            <p className="header-texto__parrafo">
              Películas y series ilimitadas en tu teléfono, tablet, computadora
              y TV sin costo extra.
            </p>
          </div>
          <div className="main-animacion">
            <img className="main-animacion__img" src={img4} alt="televicion" />
            <video
              playsInline
              muted
              loop
              className="main-animacion_video"
              src={video2}
              autoPlay
            />
          </div>
        </div>
      </section>

      <section className="main-contenedor">
        <div className="main-flex max-width">
          <div>
            <h2 className="header-texto__title header-texto__title--margin">
              Crea perfiles para niños.
            </h2>
            <p className="header-texto__parrafo">
              Los niños vivirán aventuras con sus personajes favoritos en un
              espacio diseñado exclusivamente para ellos, sin costo con tu
              membresía.
            </p>
          </div>
          <div className="main-animacion">
            <img className="main-animacion__img" src={img5} alt="televicion" />
          </div>
        </div>
      </section>

      <section className="main-contenedor">
        <div className="main-info max-width">
          <div>
            <h2 className="header-texto__title">Preguntas frecuentes</h2>
          </div>

          <section className="main-items">
            <PreguntasEs />

            <div className="main-formulario">
              <p className="header-texto__pregunta">
                ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta
                o reiniciar tu membresía de Netflix.
              </p>
              <form className="header-texto__form">
                <div className="header-form__cont">
                  <input
                    className="header-form__input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <button className="header-form__button" type="submit">
                  Comenzar{" "}
                  <i className="fas fa-chevron-right header-button__i" />
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default MainEs;
