import RatingStars from "./RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="card bg-success card-survol text-light" style={{ width: "18rem" }}>
      {artisan.image && (
        <img
          src={`https://annuaire-backend.onrender.com/uploads/${artisan.image}`}
          className="card-img-top"
          alt={artisan.nom}
        />
      )}
      <div className="card-body text-center">
        <h5 className="card-title card-deco">{artisan.nom}</h5>
        <RatingStars rating={Number(artisan.note)}/>
        <p className="specialite card-deco"><strong>{artisan.specialite}</strong></p>

        <p className="ville d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="ville__icon"
          />
          <span className="ms-2 card-deco">{artisan.ville}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtisanCard;
