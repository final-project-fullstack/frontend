import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AllRoutes from "./components/routes";
import { useStore } from "./context/storeContext";
import { Navigate } from "react-router-dom";



function App() {
  console.log("Webseite retten")
  const {
    setIsLoggedIn,
    setSpell,
    setVolk,
    setKlassen,
    setHintergrund,
    setAusrüstung,
    setUser,
    setWaffen,
    setRüstung,
    setGesinnung,
    setSprachen,
    setWerkzeuge,
    setKlassenZauber
  } = useStore();

  const [authenticationCompleted, setAuthenticationCompleted] = useState(false);


  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(`${BACKEND_URL}/spell/getAll`)
      // .get("http://localhost:3001/spell/getAll")
      .then((response) => setSpell(response.data))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/race/`)
      // .get("http://localhost:3001/race/")
      .then((response) => setVolk(response.data.allRace))
      .catch((err) => console.log(err));
    axios
      .get(`${BACKEND_URL}/background/getAll`)
      // .get("http://localhost:3001/background/getAll")
      .then((response) => setHintergrund(response.data))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/classes/`)
      // .get("http://localhost:3001/classes/")
      .then((response) => setKlassen(response.data.allClasses))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/equipment/`)
      // .get("http://localhost:3001/equipment/")
      .then((response) => setAusrüstung(response.data.equipment))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/weapon/`)
      // .get("http://localhost:3001/weapon/")
      .then((response) => setWaffen(response.data.allWeapon))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/armor/`)
      // .get("http://localhost:3001/armor/")
      .then((response) => setRüstung(response.data.allArmor))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/language/getAll`)
      // .get("http://localhost:3001/language/getAll")
      .then((response) => setSprachen(response.data.allLanguage))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/attitude/getAll`)
      // .get("http://localhost:3001/attitude/getAll")
      .then((response) => setGesinnung(response.data.attitudes))
      .catch((err) => console.log(err));

    axios
      .get(`${BACKEND_URL}/tool/getAll`)
      // .get("http://localhost:3001/tool/getAll")
      .then((response) => setWerkzeuge(response.data.tool))
      .catch((err) => console.log(err));

    axios

      .get(`${BACKEND_URL}/klassen-zauber`)
      .then((response) => setKlassenZauber(response.data))
      .catch((err) => console.log(err));
    // a()
    axios
      .get(`${BACKEND_URL}/user/checkCookie`, {
        withCredentials: true,
      })
      .then((response) => {
        setIsLoggedIn(response.data._id ? true : false); setUser(response.data); setAuthenticationCompleted(true);
      }

      )
      // .then((response) => setUser(response.data))
      .catch((err) => { console.log(err); setAuthenticationCompleted(true);; });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);




  const routes = AllRoutes()
  return (
    <BrowserRouter>
      {authenticationCompleted &&
        <Layout>

          <Routes>
            {routes.map((route) => {
              return route.isProtected ? (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<Navigate to={route.redirectPath} replace={true} />}
                />
              ) : (
                <Route key={route.id} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </Layout>
      }
    </BrowserRouter>
  );
}

export default App;
