import { useState } from "react";
import { Link } from "react-router-dom";

function SelectEn() {
  const [activo, setActivo] = useState(false);

  const handleSelect = () => {
    setActivo(!activo);
  };
  return (
    <div
      onClick={() => handleSelect()}
      className={activo ? "cambio active" : "cambio"}
    >
      <div className="selector">
        <i className="fas fa-globe noEvento"></i>
        <p className="noEvento lenguaje">Ingles</p>
        <i className="fas fa-angle-down noEvento"></i>
      </div>
      <div className="depliege">
        <div className="opciones opciones--flex">
          <Link to="/en" className="en">
            Ingles
          </Link>
          <div className="linea"></div>
          <Link to="/" className="es">
            Español
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectEn;
