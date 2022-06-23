import { useState } from "react";

function PreguntasEs() {
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    if (e.target.classList.contains("main-toogle")) {
      setActive(!active);
      e.target.classList.toggle("active");
    }
  };
  return (
    <>
      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">¿Qué es Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Netflix es un servicio de streaming que ofrece una gran variedad
              de películas, series y documentales premiados en casi cualquier
              pantalla conectada a internet.
            </p>
            <p className="main-texto__texto">
              {" "}
              Todo lo que quieras ver, sin límites ni comerciales, a un costo
              muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las
              semanas se agregan más películas y series!
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">¿Cuánto cuesta Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto">
              Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o
              dispositivo de streaming, todo por una tarifa plana mensual.
              Planes desde S/24.90 hasta S/44.90 al mes. Sin costos adicionales
              ni contratos.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">¿Dónde puedo ver Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta
              de Netflix para ver contenido al instante a través de netflix.com
              desde tu computadora personal o en cualquier dispositivo con
              conexión a internet que cuente con la app de Netflix, como smart
              TV, smartphones, tablets, reproductores multimedia y consolas de
              juegos.
            </p>
            <p className="main-texto__texto">
              Además, puedes descargar tus series favoritas con iOS, Android o
              la app para Windows 10. Con la función de descarga, puedes ver
              donde vayas y sin conexión a internet. Lleva Netflix contigo
              adonde sea.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">¿Cómo cancelo?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto">
              Netflix es flexible. Sin contratos molestos ni compromisos.
              Cancela la membresía online con solo dos clics. No hay cargos por
              cancelación. Empieza y termina cuando quieras.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">¿Qué puedo ver en Netflix?</h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              Netflix tiene un amplio catálogo de películas, series,
              documentales, animes, originales premiados y más. Todo lo que
              quieras ver, cuando quieras.
            </p>
          </div>
        </div>
      </div>

      <div className="main-item">
        <div onClick={(e) => handleActive(e)} className="main-toogle">
          <h2 className="main-toogle__texto">
            ¿Es bueno Netflix para los niños?
          </h2>
          <div className="main-ico">
            <i className="fas fa-plus main-ico__plus" />
            <i className="fas fa-times main-ico__times" />
          </div>
        </div>
        <div className="main-texto">
          <div className="main-texto__padding">
            <p className="main-texto__texto margin">
              La experiencia de Netflix para niños está incluida en la membresía
              para que los padres tengan el control mientras los peques
              disfrutan series y películas familiares en su propio espacio.
            </p>
            <p className="main-texto__texto">
              {" "}
              Los perfiles para niños incluyen controles parentales protegidos
              por PIN que te permiten restringir el contenido que pueden ver los
              niños en función de la clasificación por edad y bloquear
              determinados títulos que no quieras que los niños vean.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreguntasEs;
