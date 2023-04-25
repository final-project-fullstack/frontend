import Login from "../pages/RegisterUndLogin/Login";
import Register from "../pages/RegisterUndLogin/Register";
import Hintergrund from "../pages/Hintergrund/Hintergrund";
import Home from "../pages/Home/Home";
import Klassen from "../pages/Klassen/Klassen";
import MeineZauber from "../pages/MeineZauber/MeineZauber";
import MeinChar from "../pages/Characterbogen/Charactersbogen";
import Völker from "../pages/Völker/Völker";
import Waffen from "../pages/Waffen/Waffen";
import Zauber from "../pages/Zauber/Zauber";
import Werkzeuge from "../pages/Werkzeuge/Werkzeuge";
import Rüstung from "../pages/Rüstung/Rüstung";
import GesinnungUndSprachen from "../pages/GesinnungUndSprachen/GesinnungUndSprachen";
import Abenteuerausrüstung from "../pages/Abenteuerausrüstung/Abenteuerausrüstung";
import Dashboard from "../pages/Dashboard/Dashboard.js";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/register", element: <Register />, id: 2 },
  { path: "/login", element: <Login />, id: 3 },
  { path: "/myspells", element: <MeineZauber />, id: 4 },
  { path: "/zauber", element: <Zauber />, id: 5 },
  { path: "/völker", element: <Völker />, id: 6 },
  { path: "/klassen", element: <Klassen />, id: 7 },
  { path: "/hintergrund", element: <Hintergrund />, id: 8 },
  { path: "/gesinnung-sprachen", element: <GesinnungUndSprachen />, id: 9 },
  { path: "/waffen", element: <Waffen />, id: 10 },
  { path: "/rüstung", element: <Rüstung />, id: 11 },
  { path: "/werkzeuge", element: <Werkzeuge />, id: 12 },
  { path: "/abenteuerausrüstung", element: <Abenteuerausrüstung />, id: 13 },
  { path: "/dashoard", element: <Dashboard />, id: 14 },
  { path: "/mychar", element: <MeinChar />, id: 15 },
];

export default routes;
