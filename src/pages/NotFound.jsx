import { Link } from "react-router-dom";
import ImgLogo from "../img/logo-neflix.png";

function NotFound() {
  return (
    <>
      <header className="">
        <div className="header-contenedor max-width">
          <div className="header-logo">
            <img src={ImgLogo} alt="logo-neflix" className="header-logo__img" />
          </div>
          <div className="header-botones">
            <Link to="/" className="header-botones__button">
              Volver
            </Link>
          </div>
        </div>

        <div className="header-contenedor-texto max-width">
          <div className="header-texto notfound">
            <h2 className="header-texto__title">
              ¡ESA PÁGINA NO FUE ENCONTRADA!
            </h2>
            <h2>
              <span className="header-error header-error-1">4</span>
              <span className="header-error header-error-2">0</span>
              <span className="header-error header-error-3">4</span>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
}

export default NotFound;
