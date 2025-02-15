import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div>
            <div className="img-container">
              <img src="img/Logo.jpeg" alt="Logo" />
            </div>
            <h1>DelizieInCasa</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">Chi siamo</NavLink>
              </li>
              <li>
                <NavLink to="/feed">Ricette</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
