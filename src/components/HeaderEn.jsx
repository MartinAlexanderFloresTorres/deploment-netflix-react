import ImgLogo from "../img/logo-neflix.png";
import SelectEn from "./SelectEn";

function HeaderEn() {
  return (
    <header className="header">
      <div className="header-contenedor max-width">
        <div className="header-logo">
          <img src={ImgLogo} alt="logo-neflix" className="header-logo__img" />
        </div>
        <div className="header-botones">
          <SelectEn />
          <button className="header-botones__button">Log In</button>
        </div>
      </div>

      <div className="header-contenedor-texto max-width">
        <div className="header-texto">
          <h1 className="header-texto__title">
            Unlimited movies and series and much more.
          </h1>
          <p className="header-texto__parrafo">
            Enjoy wherever you want. Cancel whenever you want.
          </p>
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
            <button
              className="header-form__button"
              type="submit"
            >
              Begin <i className="fas fa-chevron-right header-button__i"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default HeaderEn;
