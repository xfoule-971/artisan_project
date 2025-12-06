import { Helmet } from 'react-helmet';
import Construc from "../assets/images/construction.jpg";

const Marches = () => {
    return (
        <div>
            <Helmet>
                <title>Annuaire des artisans d'Auvergne</title>
                <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation." />
            </Helmet>

            <div className="container my-5 text-center">
                <img src={Construc} alt="construction" style={{ width: "30rem" }} className='img-fluid'></img>
                <h1 className="text-center my-3">Page en cours de construction...</h1>
            </div>
        </div>
    )
};

export default Marches;