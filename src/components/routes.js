import Hintergrund from "../pages/Hintergrund";
import Home from "../pages/Home";
import Klassen from "../pages/Klassen";
import Login from "../pages/Login";
import MeineZauber from "../pages/MeineZauber";
import Register from "../pages/Register";
import Völker from "../pages/Völker";
import Waffen from "../pages/Waffen";
import Zauber from "../pages/Zauber";
import Werkzeuge from "../pages/Werkzeuge"
import Rüstung from "../pages/Rüstung";
import GesinnungUndSprachen from "../pages/GesinnungUndSprachen";
import Abenteuerausrüstung from "../pages/Abenteuerausrüstung";

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
  { path: "/werkzeuge", element: < Werkzeuge/>, id: 12 },
  { path: "/abenteuerausrüstung", element: < Abenteuerausrüstung/>, id: 12 },
];

export default routes;
