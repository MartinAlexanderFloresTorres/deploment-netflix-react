import PreguntasEn from "./PreguntasEn";
import img1 from "../img/tv.png";
import img2 from "../img/mobile-0819.jpg";
import img3 from "../img/boxshot.png";
import img4 from "../img/device-pile.png";
import img5 from "../img/niños.png";
import video1 from "../img/video-tv-0819.mp4";
import video2 from "../img/video-devices.mp4";

function MainEn() {
  return (
    <main className="main">
      <section className="main-contenedor">
        <div className="main-flex max-width">
          <div>
            <h2 className="header-texto__title header-texto__title--margin">
              Enjoy on your TV.
            </h2>
            <p className="header-texto__parrafo">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
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
              Download your series to watch them offline.
            </h2>
            <p className="header-texto__parrafo">
              Save your favorite content and you will always have something to
              watch.
            </p>
          </div>
          <div className="main-animacion">
            <img className="main-animacion__img" src={img2} alt="mobile-0819" />
            <div className="main-loading">
              <img className="main-loading__boxshot" src={img3} alt="boxshot" />
              <div>
                <p className="main-loading__negrita">Stranger Things</p>
                <span className="main-loading__azul">Downloading...</span>
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
              Enjoy where you want.
            </h2>
            <p className="header-texto__parrafo">
              Unlimited movies and series on your phone, tablet, computer and TV
              at no extra cost.
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
              Create profiles for children.
            </h2>
            <p className="header-texto__parrafo">
              Children will live adventures with their favorite characters in a
              space designed exclusively for them, at no cost with your
              membership.
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
            <h2 className="header-texto__title">Frequent questions</h2>
          </div>

          <section className="main-items">
            <PreguntasEn />

            <div className="main-formulario">
              <p className="header-texto__pregunta">
                Do you want to watch Netflix now? Enter your email to create an
                account or restart your Netflix membership.
              </p>
              <form className="header-texto__form">
                <div className="header-form__cont">
                  <input
                    className="header-form__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <button className="header-form__button" type="submit">
                  Begin <i className="fas fa-chevron-right header-button__i" />
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default MainEn;
