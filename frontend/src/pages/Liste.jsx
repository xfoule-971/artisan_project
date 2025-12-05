import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";

const Liste = () => {
    const { slug } = useParams();
    const [artisans, setArtisans] = useState([]);

    const routes = {
        batiment: "http://localhost:4000/api/categories/batiment",
        services: "http://localhost:4000/api/categories/services",
        fabrication: "http://localhost:4000/api/categories/fabrication",
        alimentation: "http://localhost:4000/api/categories/alimentation",
    };

    useEffect(() => {
        const url = routes[slug];

        if (!url) return;

        fetch(url)
        .then(res => res.json())
        .then(data => setArtisans(data))
        .catch(err => console.error("Erreur API:", err));
    }, [slug]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-primary">Artisans dans le {slug}</h1>

            <div className="row justify-content-center">
                {artisans.map((artisan) => (
                <div
                    key={artisan.id}
                    className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">

                    {/* Lien vers la fiche détaillée */}
                    <Link to={`/artisans/${artisan.id}`}>
                        <ArtisanCard artisan={artisan} />
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
};

export default Liste;