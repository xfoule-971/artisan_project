import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Mistake from "../assets/images/mistake.jpg";

const Erreur = () => {
    return (
        <div>
            <Helmet>
                <title>Annuaire des artisans d'Auvergne</title>
                <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation." />
            </Helmet>
            
            <div className="container my-5 text-center">
                <img src={Mistake} alt="construction" style={{ width: "30rem" }}></img>
                <h1 className="text-center my-3">La page que vou avez demandé est introuvable</h1>
                <p>Ou la page a peu-être été supprimée</p>

                <Link to="/">
                    <button type="button" class="btn btn-success">Success</button>
                </Link>
            </div>
        </div>
    )
};
export default Erreur;