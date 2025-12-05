import RatingStars from "./RatingStars";
import Localisation from "../assets/icons/pin.png";

const ArtisanCard = (artisan) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={`http://localhost:4000/uploads/${artisan.image}`} class="card-img-top"  alt={artisan.nom}/>
            <div className="card-body">
                <h5 className="card-title">{artisan.nom}</h5>
                <RatingStars rating={Number(artisan.note)} />
                <p className="specialite">{artisan.specialite}</p>
                <p className="ville">
                    <img src={Localisation} alt="icône"/>
                    <span>{artisan.ville}</span>
                </p>
            </div>
        </div>
    )
};
export default ArtisanCard;