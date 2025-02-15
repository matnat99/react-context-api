import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Delizie in Cucina</h3>
            <p>
              Scopri le migliori ricette per ogni occasione, facili e gustose!
            </p>
          </div>

          <div className="footer-section">
            <h4>Link Utili</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feed">Ricette</Link>
              </li>
              <li>
                <Link to="/about-us">Chi siamo</Link>
              </li>
              <li>
                <Link to="#">Contatti</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Seguici</h4>
            <div className="social-links">
              <Link to="#">
                <i className="fa-brands fa-facebook"></i> Facebook
              </Link>
              <Link to="#">
                <i className="fa-brands fa-instagram"></i> Instagram
              </Link>
              <Link to="#">
                <i className="fa-brands fa-pinterest"></i> Pinterest
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Ricevi nuove ricette direttamente nella tua email!</p>
            <button className="newsletter-button">Iscriviti</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Delizie in Cucina - Made with 🤍 138
      </div>
    </footer>
  );
}
