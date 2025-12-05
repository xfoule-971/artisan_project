import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png"
import Phone from "../assets/icons/phone.png";
import Tram from "../assets/icons/tramway.png";
import Facebook from "../assets/icons/facebook.png";
import Linkedin from "../assets/icons/linkedin.png";
import Youtube from "../assets/icons/youtube.png";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Tiktok from "../assets/icons/tiktok.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row footext">
                    <div className="footext__vignette">
                        <img src={Logo} alt="embleme" className="footext__vignette-logo"></img>
                    </div>

                    <div className="w-25">
                        <h3>Lyon</h3>
                        <div className="my-4">
                            <p className="my-1">101 cours Charlemagne</p>
                            <p className="my-1">CS 20033</p>
                            <p className="my-1">69269 LYON CEDEX 02</p>
                            <p className="my-1">France</p>
                            <p className="my-1">Ouvert du lundi au vendredi de 08h15 à 17h</p>
                            <p className="my-3">
                                <img src={Phone} alt="icône"></img>
                                <span className="mx-2">
                                    <a href="tel:+33426734000" className="text-light text-decoration-none">+33 (0)4 26 73 40 00</a>
                                </span>
                            </p>
                            <p>Accueil téléphonique de 08h30 à 17h</p>
                            <p className="my-3">
                                <img src={Tram} alt="icône"></img>
                                <span className="mx-2">Trams T1 et T2 - Arrêt Hôtel de Région - Montrochet</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-25">
                        <h3>Clermont-Ferrand</h3>
                        <div className="my-4">
                            <p className="my-1">59 Boulevard Léon Jouhaux</p>
                            <p className="my-1">CS 90 706</p>
                            <p className="my-1">63 050 CLERMONT-FERRAND 02</p>
                            <p className="my-1">France</p>
                            <p className="my-1">Ouvert du lundi au vendredi de 08h15 à 17h</p>
                            <p className="my-3">
                                <img src={Phone} alt="icône"></img>
                                <span className="mx-2">
                                    <a href="tel:+33426734000" className="text-light text-decoration-none">+33 (0)4 26 73 40 00</a>
                                </span>
                            </p>
                            <p>Accueil téléphonique de 08h30 à 17h</p>
                            <p className="my-3">
                                <img src={Tram} alt="icône"></img>
                                <span className="mx-2">Tram A - Arrêt Musée d’Art Roger Quilliot</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-light"></hr>
                <div className="row">
                    <ul className="footer__menu">
                        <li>
                            <Link to="/mentionslegales" className="text-decoration-none footer__menu-link">Mentions légales</Link>
                        </li>
                        <li>
                            <Link to="/donnees" className="text-decoration-none footer__menu-link">Données personnelles</Link>
                        </li>
                        <li>
                            <Link to="/accessibilite" className="text-decoration-none footer__menu-link">Accessibilité : partiellement conforme</Link>
                        </li>
                        <li>
                            <Link to="/presse" className="text-decoration-none footer__menu-link">Presse</Link>
                        </li>
                        <li>
                            <Link to="/marches" className="text-decoration-none footer__menu-link">Marchés publics</Link>
                        </li>
                        <li>
                            <Link to="/region" className="text-decoration-none footer__menu-link">Venir à la Région</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="text-decoration-none footer__menu-link">Contacts</Link>
                        </li>
                        <li>
                            <Link to="/politique" className="text-decoration-none footer__menu-link">Politique des cookies</Link>
                        </li>
                        <li>
                            <Link to="/gestion" className="text-decoration-none footer__menu-link">Gestion des cookies</Link>
                        </li>
                    </ul>
                </div>
                <div className="row my-4 p-2">
                    <div className="socialnetwork">
                        <a href="https://www.facebook.com/RegionAuvergneRhoneAlpes" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://www.linkedin.com/company/auvergne-rhone-alpes" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://www.youtube.com/c/regionauvergnerhonealpes" target="_blank" rel="noopener noreferrer">
                            <img src={Youtube} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://www.instagram.com/region_auvergnerhonealpes/#" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://x.com/auvergnerhalpes" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://www.whatsapp.com/channel/0029Vb67SCEG3R3jaCrWfY41" target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} alt="icône" className="socialnetwork__link"/>
                        </a>
                        <a href="https://www.tiktok.com/@regionauvergnerhonealpes" target="_blank" rel="noopener noreferrer">
                            <img src={Tiktok} alt="icône" className="socialnetwork__link"/>
                        </a>
                    </div>
                </div>
            </div>
           
        </footer>
    )
};

export default Footer;