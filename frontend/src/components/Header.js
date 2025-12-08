import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const terme = searchTerm.trim();
    if (!terme) return;

    try {
      // Rechercher artisan par nom via l'API
      const res = await fetch(`http://localhost:4000/api/artisans?search=${encodeURIComponent(terme)}`);
      const data = await res.json();

      if (data.length === 0) {
        alert("Aucun artisan trouvé avec ce nom !");
        return;
      }

      // Prendre le premier résultat et naviguer vers sa fiche
      const artisan = data[0];
      navigate(`/artisans/${artisan.id}`);
      setSearchTerm(""); // vider l'input
    } catch (err) {
      console.error("Erreur recherche :", err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg p-2 navigation">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="bg-light" style={{ width: "9rem" }}>
            <img src={Logo} alt="embleme" style={{ width: "9rem" }}/>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {/* Liens de menu */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <NavLink to="/liste/batiment" 
              style={({isActive}) =>({
                fontWeight: isActive? 'bold' : 'normal',
                borderBottom: isActive? '2px solid #fff': 'none',
              })}
              className="navigation__link">Bâtiment</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/liste/services"
              style={({isActive}) =>({
                fontWeight: isActive? 'bold' : 'normal',
                borderBottom: isActive? '2px solid #fff': 'none',
              })} 
              className="navigation__link">Services</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/liste/fabrication"
              style={({isActive}) =>({
                fontWeight: isActive? 'bold' : 'normal',
                borderBottom: isActive? '2px solid #fff': 'none',
              })} 
              className="navigation__link">Fabrication</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/liste/alimentation"
              style={({isActive}) =>({
                fontWeight: isActive? 'bold' : 'normal',
                borderBottom: isActive? '2px solid #fff': 'none',
              })} 
              className="navigation__link">Alimentation</NavLink>
            </li>
          </ul>

          {/* Barre de recherche */}
          <form className="d-flex ms-3" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

