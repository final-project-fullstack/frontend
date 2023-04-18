import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./components/routes";
import UserContext from "./context/userContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [spell, setSpell] = useState([]);
  const [searchSpell, setSearchSpell] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [inhaltsverzeichnis, setInhaltsverzeichnis] = useState([]);
  const [filterVolk, setFilterVolk] = useState({});
  const [volk, setVolk] = useState([]);
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
      .get("http://localhost:3001/user/checkCookie", {
        withCredentials: true,
      })
      .then((response) => setIsLoggedIn(response.data))
      .catch((err) => console.log(err));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(isLoggedIn, volk);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          setIsLoggedIn,
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
          filterVolk,
          setFilterVolk,
        }}
      >
        <Layout>
          <Routes>
            {routes.map((route) => {
              return <Route key={route.id} {...route} />;
            })}
          </Routes>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
