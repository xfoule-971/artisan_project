import RatingStars from "./RatingStars";
import Localisation from "../assets/icons/pin.png";

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="card bg-success card-survol text-light" style={{ width: "18rem" }}>
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
        <p className="ville">
          <img src={Localisation} alt="icône" style={{ width: "16px", marginRight: "4px" }} />
          <span>{artisan.ville}</span>
        </p>
      </div>
    </div>
  );
};

export default ArtisanCard;
