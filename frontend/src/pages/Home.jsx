import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ArtisanCard from "../components/ArtisanCard";
import Search from "../assets/images/cd.jpg";

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/categories/top")
      .then((res) => res.json())
      .then((data) => setArtisans(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Annuaire des artisans d'Auvergne</title>
        {/*La description aux moteurs de recherche*/}
        <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation."/>
      </Helmet>

      {/* Titre principal responsive et centré */}
      <h1 className="container text-primary fw-bold m-4 fs-5 fs-md-3 text-break text-center">
        La région Auvergne : l'artisanat prémium
      </h1>

      <div className="container my-5">
        {/* Section "Trouver mon artisan" */}
        <section className="d-flex justify-content-center align-items-start flex-wrap my-5">
          {/* Bloc texte */}
          <div
            className="cadre text-light p-4 m-2 flex-grow-1"
            style={{ minWidth: "280px", maxWidth: "32rem" }}
          >
            <h2 className="mb-4 fw-bolder text-center">Trouver mon artisan ?</h2>
            <ol className="text-center">
              <li>Choisir la catégorie de l’artisanat dans le menu.</li>
              <li>Choisir un artisan.</li>
              <li>Le contacter via le formulaire de contact.</li>
              <li>Une réponse sera apportée sous 48h.</li>
            </ol>
          </div>

          {/* Bloc image */}
          <div
            className="m-2 flex-grow-1 d-flex justify-content-center"
            style={{ minWidth: "280px", maxWidth: "26rem" }}
          >
            <img src={Search} alt="cd-rom" className="img-fluid" />
          </div>
        </section>

        {/* Section "Artisans du mois" */}
        <section className="container my-5 text-center">
          <h2 className="mb-4 text-primary fw-bolder">Les trois artisans du mois</h2>

          <div className="row justify-content-center g-4">
            {artisans.map((a) => (
              <div
                key={a.id}
                className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
              >
                <ArtisanCard artisan={a} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;


