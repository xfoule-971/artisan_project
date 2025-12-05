import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";

const Home = () => {
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
    fetch("http://localhost:4000/api/categories/top")
        .then(res => res.json())
        .then(data => setArtisans(data))
        .catch(err => console.error(err));
    }, [])

    return (
        <div className="container mt-4">
            <section className="row justify-content-center">
                <h2>Comment trouver mon artisan?</h2>
                <ol>
                    <li>
                        Choisir la catégorie de l’artisanat dans le menu.
                    </li>
                    <li>
                        Choisir un artisan.
                    </li>
                    <li>
                        Le contacter via le formulaire de contact.
                    </li>
                    <li>
                        Une réponse sera apportée sous 48h.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Artisans du mois</h2>

                <div className="cards">
                    {artisans.map(a => <ArtisanCard key={a.id} artisan={a} />)}
                </div>
            </section>
        </div>
    )
};

export default Home;