import { useState } from "react";
import { Link } from "react-router-dom";
import ImgLogo from "../img/logo-neflix.png";

function HeaderEs() {
  const [redirex, setRedirex] = useState(false);
  const [activo, setActivo] = useState(false);

  const handleSelect = () => {
    setActivo(!activo);
  };

  return (
    <header className="header">
      <div className="header-contenedor max-width">
        <div className="header-logo">
          <img src={ImgLogo} alt="logo-neflix" className="header-logo__img" />
        </div>
        <div className="header-botones">
          <div
            onClick={() => handleSelect()}
            className={activo ? "cambio active" : "cambio"}
          >
            <div className="selector">
              <i className="fas fa-globe noEvento"></i>
              <p className="noEvento lenguaje">Español</p>
              <i className="fas fa-angle-down noEvento"></i>
            </div>
            <div className="depliege">
              <div className="opciones opciones--flex">
                <Link to="/" className="es">
                  Español
                </Link>
                <div className="linea"></div>
                <Link to="/en" className="en">
                  Ingles
                </Link>
              </div>
            </div>
          </div>
          <button className="header-botones__button">Iniciar Sesión</button>
        </div>
      </div>

      <div className="header-contenedor-texto max-width">
        <div className="header-texto">
          <h1 className="header-texto__title">
            Películas y series ilimitadas y mucho más.
          </h1>
          <p className="header-texto__parrafo">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <p className="header-texto__pregunta">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
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
              Comenzar <i className="fas fa-chevron-right header-button__i"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default HeaderEs;
