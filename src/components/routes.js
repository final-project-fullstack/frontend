import Home from "../pages/Home";
import Login from "../pages/Login";
import MeineZauber from "../pages/MeineZauber";
import Register from "../pages/Register";
import Völker from "../pages/Völker";
import Zauber from "../pages/Zauber";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/register", element: <Register />, id: 2 },
  { path: "/login", element: <Login />, id: 3 },
  { path: "/myspells", element: <MeineZauber />, id: 4 },
  { path: "/zauber", element: <Zauber />, id: 5 },
  { path: "/Völker", element: <Völker />, id: 6 },
];

export default routes;
