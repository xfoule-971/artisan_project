import { Helmet } from 'react-helmet';
import Construc from "../assets/images/construction.jpg";

const Contacts = () => {
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
                    <img src={Construc} alt="construction" className="img-fluid" style={{ maxWidth: "30rem" }} />
                    <h1 className="my-3">Page en cours de construction...</h1>
                </div>
            </main>
        </>
    )
};

export default Contacts;