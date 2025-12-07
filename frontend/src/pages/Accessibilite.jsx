import { Helmet } from 'react-helmet';
import Construc from "../assets/images/construction.jpg";

const Accessibilite = () => {
    return (
        <div>
            <Helmet>
                <title>Annuaire des artisans d'Auvergne</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation." />
                {/*Empêcher l'indexation de la page*/}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="container my-5 text-center">
                <img src={Construc} alt="construction" style={{ width: "30rem" }} className='img-fluid'></img>
                <h1 className="text-center my-3">Page en cours de construction...</h1>
            </div>
        </div>
    )
};

export default Accessibilite;