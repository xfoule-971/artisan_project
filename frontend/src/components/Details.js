import RatingStars from "./RatingStars";
import Localisation from "../assets/icons/pin.png";

const Details = ({ artisan }) => {
  return (
    <div className="card bg-success card-survol text-light" style={{ width: "22rem" }}>
      {artisan.image && (
        <img
          src={`http://localhost:4000/uploads/${artisan.image}`}
          className="card-img-top"
          alt={artisan.nom}
        />
      )}
      <div className="card-body text-center">
        <h5 className="card-title">{artisan.nom}</h5>
        <RatingStars rating={Number(artisan.note)} />
        <p className="specialite">{artisan.specialite}</p>

        {/* Ville cliquable vers Google Maps */}
        {artisan.ville && (
          <p className="ville d-flex justify-content-center align-items-center">
            <img
              src={Localisation}
              alt="icône"
              style={{ width: "16px", marginRight: "4px" }}
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(artisan.ville)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              style={{ textDecoration: "underline" }}
            >
              {artisan.ville}
            </a>
          </p>
        )}

        <p>{artisan.apropos}</p>

        {artisan.siteweb && (
          <a
            href={artisan.siteweb.startsWith("http") ? artisan.siteweb : `https://${artisan.siteweb}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            {artisan.siteweb}
          </a>
        )}
      </div>
    </div>
  );
};

export default Details;







