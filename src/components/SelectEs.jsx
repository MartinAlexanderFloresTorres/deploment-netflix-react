import { useState } from "react";
import { Link } from "react-router-dom";

function SelectEs() {
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
  );
}

export default SelectEs;
