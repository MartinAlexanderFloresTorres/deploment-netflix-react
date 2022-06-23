import SelectEn from "./SelectEn";

function FooterEn() {
  return (
    <footer className="footer">
      <div className="footer-contenedor max-width">
        <h3 className="footer-contenedor__title">
          Questions? Call to{" "}
          <a className="footer-contenedor__title" href="tel:01-820-2452">
            01-820-2452
          </a>
        </h3>
        <div className="footer-grid">
          <ul>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                frequent questions
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Investor Relations
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                ways to see
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Corporate information
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                only on netflix
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Help Center
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                job
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                terms of use
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                contact us
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Bill
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Redeem gift cards
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Privacy
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Speed ​​Test
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Press
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                buy gift cards
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Cookie preferences
              </a>
            </li>
            <li className="footer-grid__enlace">
              <a className="footer-grid__a" href="#">
                Legal notices
              </a>
            </li>
          </ul>
        </div>
        <div className="header-botones">
          <SelectEn />
        </div>

        <p className="footer-grid__texto">Netflix Perú</p>
      </div>
    </footer>
  );
}

export default FooterEn;
