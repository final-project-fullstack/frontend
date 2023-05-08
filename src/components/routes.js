import Login from "../pages/RegisterUndLogin/Login";
import Register from "../pages/RegisterUndLogin/Register";
import Hintergrund from "../pages/Hintergrund/Hintergrund";
import Home from "../pages/Home/Home";
import Klassen from "../pages/Klassen/Klassen";
import MeinChar from "../pages/Characterbogen/Charactersbogen";
import Völker from "../pages/Völker/Völker";
import Waffen from "../pages/Waffen/Waffen";
import Zauber from "../pages/Zauber/Zauber";
import Werkzeuge from "../pages/Werkzeuge/Werkzeuge";
import Rüstung from "../pages/Rüstung/Rüstung";
import GesinnungUndSprachen from "../pages/GesinnungUndSprachen/GesinnungUndSprachen";
import Abenteuerausrüstung from "../pages/Abenteuerausrüstung/Abenteuerausrüstung";
// import Character from "../pages/Character/Characters";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import { useStore } from "../context/storeContext.js";
import Impressum from "../pages/Impressum/Impressum";

export const paths = {
  homePath: "/",
  registerPath: "/register",
  loginPath: "/login",
  dashboardPath: "/dashboard",
  myspellsPath: "/myspells",
  zauberPath: "/zauber",
  voelkerPath: "/völker",
  klassenPath: "/klassen",
  hintergrundPath: "/hintergrund",
  gesinnungSprachenPath: "/gesinnung-sprachen",
  waffenPath: "/waffen",
  ruestungPath: "/rüstung",
  werkzeugePath: "/werkzeuge",
  abenteuerausruestungPath: "/abenteuerausrüstung",
  mycharPath: "/mychar",
  anyPath: "/*",
  impressumPath: "/impressum",
};
export default function AllRoutes() {
  const { isLoggedIn } = useStore();
  // console.log(isLoggedIn)

  const routes = [
    {
      path: paths.homePath,
      element: <Home />,
      isProtected: false,
      redirectPath: null,
      id: "HomePage",
    },
    {
      path: paths.registerPath,
      element: <Register />,
      isProtected: isLoggedIn ? true : false,
      redirectPath: paths.homePath,
      id: "RegisterPage",
    },
    {
      path: paths.loginPath,
      element: <Login />,
      isProtected: isLoggedIn ? true : false,
      redirectPath: paths.homePath,
      id: "LoginPage",
    },
    {
      path: paths.dashboardPath,
      element: <Dashboard />,
      isProtected: isLoggedIn ? false : true,
      redirectPath: paths.homePath,
      id: "DashboardPage",
    },
    {
      path: paths.zauberPath,
      element: <Zauber />,
      isProtected: false,
      redirectPath: null,
      id: "ZauberPage",
    },
    {
      path: paths.voelkerPath,
      element: <Völker />,
      isProtected: false,
      redirectPath: null,
      id: "VoelkerPage",
    },
    {
      path: paths.klassenPath,
      element: <Klassen />,
      isProtected: false,
      redirectPath: null,
      id: "KlassenPage",
    },
    {
      path: paths.hintergrundPath,
      element: <Hintergrund />,
      isProtected: false,
      redirectPath: null,
      id: "HintergrundPage",
    },
    {
      path: paths.gesinnungSprachenPath,
      element: <GesinnungUndSprachen />,
      isProtected: false,
      redirectPath: null,
      id: "GesinnungSprachenPage",
    },
    {
      path: paths.waffenPath,
      element: <Waffen />,
      isProtected: false,
      redirectPath: null,
      id: "WaffenPage",
    },
    {
      path: paths.ruestungPath,
      element: <Rüstung />,
      isProtected: false,
      redirectPath: null,
      id: "RuestungPage",
    },
    {
      path: paths.werkzeugePath,
      element: <Werkzeuge />,
      isProtected: false,
      redirectPath: null,
      id: "WerkzeugePage",
    },
    {
      path: paths.abenteuerausruestungPath,
      element: <Abenteuerausrüstung />,
      isProtected: false,
      redirectPath: null,
      id: "AbenteuerausruestungPage",
    },
    {
      path: paths.mycharPath,
      element: <MeinChar />,
      isProtected: false,
      redirectPath: null,
      id: "MycharPage",
    },
    // {
    //   path: paths.anyPath,
    //   element: <Character />,
    //   isProtected: false,
    //   redirectPath: null,
    //   id: "AnyPage",
    // },
    {
      path: paths.impressumPath,
      element: <Impressum />,
      isProtected: false,
      redirectPath: null,
      id: "ImpressumPage",
    },
  ];

  return routes;
}
