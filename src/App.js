import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./components/routes";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "./context/storeContext";


function App() {
  const { setIsLoggedIn,
    isLoggedIn,
    spell,
    setSpell,
    searchSpell,
    setSearchSpell,
    filteredSpells,
    setFilteredSpells,
    inhaltsverzeichnis,
    setInhaltsverzeichnis,
    volk,
    setVolk,
    klassen,
    setKlassen,
    hintergrund,
    setHintergrund,
    filterHintergrund,
    setFiltrHintergrund,
    ausrüstung,
    setAusrüstung,
    setUser,
    user,
    waffen,
    setWaffen,
    rüstung,
    setRüstung,
    gesinnung,
    setGesinnung,
    sprachen,
    setSprachen,
    werkzeuge, setWerkzeuge } = useStore()

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [spell, setSpell] = useState([]);
  // const [searchSpell, setSearchSpell] = useState([]);
  // const [filteredSpells, setFilteredSpells] = useState([]);
  // const [inhaltsverzeichnis, setInhaltsverzeichnis] = useState([]);
  // const [volk, setVolk] = useState([]);
  // const [klassen, setKlassen] = useState([]);
  // const [ausrüstung, setAusrüstung] = useState([]); const [gesinnung, setGesinnung] = useState([]);
  // const [sprachen, setSprachen] = useState([]);
  // const [hintergrund, setHintergrund] = useState([]);
  // const [filterHintergrund, setFiltrHintergrund] = useState([]);
  // const [user, setUser] = useState([]);

  // const [waffen, setWaffen] = useState([]);
  // const [rüstung, setRüstung] = useState([]);
  // const [werkzeuge, setWerkzeuge] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("http://localhost:3001/spell/getAll")
      .then((response) => setSpell(response.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/race/")
      .then((response) => setVolk(response.data.allRace))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3001/background/getAll")
      .then((response) => setHintergrund(response.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/classes/")
      .then((response) => setKlassen(response.data.allClasses))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/equipment/")
      .then((response) => setAusrüstung(response.data.equipment))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/weapon/")
      .then((response) => setWaffen(response.data.allWeapon))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/armor/")
      .then((response) => setRüstung(response.data.allArmor))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/language/getAll")
      .then((response) => setSprachen(response.data.allLanguage))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/attitude/getAll")
      .then((response) => setGesinnung(response.data.attitudes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/tool/getAll")
      .then((response) => setWerkzeuge(response.data.tool))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/user/checkCookie", {
        withCredentials: true,
      })
      .then((response) => ([setIsLoggedIn(response.data._id ? true : false, setUser(response.data))]))
      // .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  return (
    <BrowserRouter>

      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
