import SelectEs from "./SelectEs"

function FooterEs() {
  return (
    <footer className="footer">
    <div className="footer-contenedor max-width">
        <h3 className="footer-contenedor__title">¿Preguntas? Llama al <a className="footer-contenedor__title" href="tel:01-820-2452">01-820-2452</a></h3>
        <div className="footer-grid">
            <ul>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Preguntas frecuentes</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Relaciones con inversionistas</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Formas de ver</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Información corporativa</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Solo en Netflix</a></li>
            </ul>

            <ul>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Centro de ayuda</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Empleo</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Términos de uso</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Contáctanos</a></li>
            </ul>

            <ul>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Cuenta</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Canjear tarjetas de regalo</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Privacidad</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Prueba de velocidad</a></li>
            </ul>

            <ul>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Prensa</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Comprar tarjetas de regalo</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Preferencias de cookies</a></li>
                <li className="footer-grid__enlace"><a className="footer-grid__a" href="#">Avisos legales</a></li>
            </ul>
        </div>
        <div className="header-botones">
           <SelectEs />
        </div>
    
        <p className="footer-grid__texto">Netflix Perú</p>
    </div>
</footer>
  )
}

export default FooterEs