import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RatingStars from "../components/RatingStars";
import Localisation from "../assets/icons/pin.png";

const ArtisanFiche = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  // Formulaire email
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState("");

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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
        setFormData({ nom: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  if (!artisan) return <p className="text-center mt-4">Chargement...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">{artisan.nom}</h1>

      <div className="card mx-auto mb-4" style={{ maxWidth: "500px" }}>
        <img
          src={`http://localhost:4000/uploads/${artisan.image}`}
          className="card-img-top"
          alt={artisan.nom}
        />
        <div className="card-body">
          <RatingStars rating={Number(artisan.note)} />
          <p className="specialite"><strong>Spécialité :</strong> {artisan.specialite}</p>
          <p className="ville">
            <img src={Localisation} alt="icône" /> {artisan.ville}
          </p>
        </div>
      </div>

      <div className="card mx-auto p-4" style={{ maxWidth: "500px" }}>
        <h3 className="mb-3">Contacter cet artisan</h3>
        {status && <p>{status}</p>}
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

          <button type="submit" className="btn btn-success">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ArtisanFiche;
