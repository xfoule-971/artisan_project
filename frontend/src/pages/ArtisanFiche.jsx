import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Details from "../components/Details";

const ArtisanFiche = () => {
  const { id } = useParams();
  const location = useLocation();
  const [artisan, setArtisan] = useState(location.state?.artisan || null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  // Fetch si on n'a pas l'artisan en state ou si on arrive directement via URL
  useEffect(() => {
    if (!artisan && id) {
      const fetchArtisan = async () => {
        try {
          const res = await fetch(`http://localhost:4000/api/artisans/${id}`);
          if (!res.ok) throw new Error("Artisan non trouvé");
          const data = await res.json();
          setArtisan(data);
        } catch (err) {
          console.error("Erreur lors de la récupération de l’artisan :", err);
          setStatus("Artisan non trouvé");
        }
      };
      fetchArtisan();
    }
  }, [id, artisan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) return;
    try {
      const res = await fetch(`http://localhost:4000/api/contact/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message envoyé !");
        setFormData({ nom: "", email: "", objet: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi.");
      }
    } catch {
      setStatus("Erreur lors de l'envoi.");
    }
  };

  if (!artisan) return <p className="text-center mt-4">{status || "Chargement..."}</p>;

  return (
    <div>
      <Helmet>
        <title>Annuaire des artisans d'Auvergne</title>
        {/*La description aux moteurs de recherche*/}
        <meta name="description" content="Trouvez un artisan local : bâtiment, services, fabrication, alimentation." />
      </Helmet>

      <div className="container my-5">
        <h1 className="text-center mb-5 text-primary fw-bold">{artisan.nom}</h1>

        <div className="row g-1">

          {/*fiche détaillée d'un artisan*/}
          <div className="col-12 col-lg-7 d-flex justify-content-center">
            <Details artisan={artisan} />
          </div>

          {/*formulaire de contact*/}
          <div className="col-12 col-lg-5">
            <div className="card p-4 shadow-sm bg-secondary">
              <h3 className="mb-3 text-center fw-bolder">Contacter l'artisan</h3>
              {status && <p className="text-center">{status}</p>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Votre nom</label>
                  <input type="text" name="nom" className="form-control" value={formData.nom} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Votre email</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Objet</label>
                  <input type="text" name="objet" className="form-control" value={formData.objet} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-success w-100">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanFiche;














