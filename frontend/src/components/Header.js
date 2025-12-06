import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirige vers la page Liste d'une catégorie par défaut (ex: batiment)
    navigate("/liste/batiment");
  };

  return (
    <nav className="navbar navbar-expand-lg p-2 navigation">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="bg-light" style={{ width: "9rem" }}>
            <img src={Logo} alt="embleme" style={{ width: "9rem" }}/>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
              <Link to="/liste/batiment" className="navigation__link">Bâtiment</Link>
            </li>
            <li className="nav-item mx-5">
              <Link to="/liste/services" className="navigation__link">Services</Link>
            </li>
            <li className="nav-item mx-5">
              <Link to="/liste/fabrication" className="navigation__link">Fabrication</Link>
            </li>
            <li className="nav-item mx-5">
              <Link to="/liste/alimentation" className="navigation__link">Alimentation</Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher..."
              aria-label="Search"
              value={searchTerm}                     // <-- lie l'input au state
              onChange={(e) => setSearchTerm(e.target.value)} // <-- met à jour le state
            />
            <button className="btn btn-success" type="submit">Cliquez</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
