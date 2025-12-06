import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RatingStars from "../components/RatingStars";
import Localisation from "../assets/icons/pin.png";

const ArtisanFiche = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  // Formulaire de contact
  const [formData, setFormData] = useState({ nom: "", email: "", objet: "", message: "" });
  const [status, setStatus] = useState("");

  // Fetch artisan
  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/artisans/${id}`);
        const data = await res.json();
        setArtisan(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArtisan();
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  if (!artisan) return <p className="text-center mt-4">Chargement...</p>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">{artisan.nom}</h1>

      {/* Infos artisan */}
      <div className="card mx-auto mb-4 p-3" style={{ maxWidth: "500px" }}>
        {artisan.image && (
          <img
            src={`http://localhost:4000/uploads/${artisan.image}`}
            alt={artisan.nom}
            className="card-img-top mb-3"
          />
        )}

        {artisan.note && <RatingStars rating={Number(artisan.note)} />}

        <p>
          <strong>Ville :</strong> <img src={Localisation} alt="icône" /> {artisan.ville}
        </p>
        {artisan.siteweb && (
          <p>
            <strong>Site web :</strong>{" "}
            <a href={artisan.siteweb} target="_blank" rel="noopener noreferrer">
              {artisan.siteweb}
            </a>
          </p>
        )}
      </div>

      {/* Formulaire de contact */}
      <div className="card mx-auto p-4" style={{ maxWidth: "500px" }}>
        <h3 className="mb-3 text-center">Contacter cet artisan</h3>
        {status && <p className="text-center">{status}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Votre nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Votre email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="objet" className="form-label">Objet</label>
            <input
              type="text"
              className="form-control"
              id="objet"
              name="objet"
              value={formData.objet}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ArtisanFiche;



