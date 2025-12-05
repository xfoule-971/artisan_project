import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png"
import Phone from "../assets/icons/phone.png";
import Tram from "../assets/icons/tramway.png";

const Footer = () => {
    return (
        <footer className="bg-primary p-2">
            <div className="container">
                <div className="row text-light d-flex justify-content-center">
                    <div className="bg-light w-25">
                        <img src={Logo} alt="embleme" className="vignette-footer"></img>
                    </div>

                    <div>
                        <h3>Lyon</h3>
                        <div>
                            <p>101 cours Charlemagne</p>
                            <p className="py-2">CS 20033</p>
                            <p>69269 LYON CEDEX 02</p>
                            <p>France</p>
                            <p>Ouvert du lundi au vendredi de 08h15 à 17h</p>
                            <p>
                                <img src={Phone} alt="icône"></img>
                                <span><a href="tel:+33426734000">+33 (0)4 26 73 40 00</a></span>
                            </p>
                            <p>Accueil téléphonique de 08h30 à 17h</p>
                            <p>
                                <img src={Tram} alt="icône"></img>
                                <span>Trams T1 et T2 - Arrêt Hôtel de Région - Montrochet</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3>Clermont-Ferrand</h3>
                        <div>
                            <p>59 Boulevard Léon Jouhaux</p>
                            <p>CS 90 706</p>
                            <p>63 050 CLERMONT-FERRAND 02</p>
                            <p>France</p>
                            <p>Ouvert du lundi au vendredi de 08h15 à 17h</p>
                            <p>
                                <img src={Phone} alt="icône"></img>
                                <span><a href="tel:+33426734000">+33 (0)4 26 73 40 00</a></span>
                            </p>
                            <p>Accueil téléphonique de 08h30 à 17h</p>
                            <p>
                                <img src={Tram} alt="icône"></img>
                                <span>Tram A - Arrêt Musée d’Art Roger Quilliot</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-light"></hr>
                <div className="row">
                    <ul className="list-unstyled d-flex justify-content-center g-3">
                        <li>
                            <Link to="/mentionslegales" className="text-light text-decoration-none">Mentions légales</Link>
                        </li>
                        <li>
                            <Link to="/donnees" className="text-light text-decoration-none">Données personnelles</Link>
                        </li>
                        <li>
                            <Link to="/accessibilite" className="text-light text-decoration-none">Accessibilité : partiellement conforme</Link>
                        </li>
                        <li>
                            <Link to="/presse" className="text-light text-decoration-none">Presse</Link>
                        </li>
                        <li>
                            <Link to="/marches" className="text-light text-decoration-none">Marchés publics</Link>
                        </li>
                        <li>
                            <Link to="/region" className="text-light text-decoration-none">Venir à la Région</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="text-light text-decoration-none">Contacts</Link>
                        </li>
                        <li>
                            <Link to="/politique" className="text-light text-decoration-none">Politique des cookies</Link>
                        </li>
                        <li>
                            <Link to="/gestion" className="text-light text-decoration-none">Gestion des cookies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default Footer;