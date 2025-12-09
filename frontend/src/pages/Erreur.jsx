import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Mistake from "../assets/images/mistake.jpg";

const Erreur = () => {
    return (
        <>
            <Helmet>
                <title>Annuaire des artisans d'Auvergne</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation." />
                {/*Empêcher l'indexation de la page*/}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <main className="mt-5 pt-5 text-center">
                <div className="container my-5">
                    <img src={Mistake} alt="Erreur" className="img-fluid" style={{ maxWidth: "30rem" }} />
                    <h1 className="my-3">La page que vous avez demandée est introuvable</h1>
                    <p>Ou la page a peut-être été supprimée</p>

                    <Link to="/">
                        <button type="button" className="btn btn-success">Retour à l'accueil</button>
                    </Link>
                </div>
            </main>
        </>
    )
};

export default Erreur;
