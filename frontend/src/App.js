import { Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Liste from "./pages/Liste";
import Fiche from "./pages/Fiche";
import Erreur from "./pages/Erreur";
import Mentionslegales from "./pages/Mentionslegales";
import Donnees from "./pages/Donnees";
import Accessibilite from "./pages/Accessibilite";
import Presse from "./pages/Presse";
import Marches from "./pages/Marches";
import Region from "./pages/Region";
import Contacts from "./pages/Contacts";
import Politique from "./pages/Politique";
import Gestion from "./pages/Gestion";

const App = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artisans" element={<Liste />} />
                <Route path="/artisans/:id" element={<Fiche />} />
                <Route path="*" element={<Erreur />} />
                <Route path="/mentionslegales" element={<Mentionslegales />}></Route>
                <Route path="/donnees" element={<Donnees />}></Route>
                <Route path="/accessibilite" element={<Accessibilite />}></Route>
                <Route path="/presse" element={<Presse />}></Route>
                <Route path="/marches" element={<Marches />}></Route>
                <Route path="/region" element={<Region />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/politique" element={<Politique />}></Route>
                <Route path="/gestion" element={<Gestion />}></Route>
            </Routes>

            <Footer />
        </div>
    )
};
export default App;
