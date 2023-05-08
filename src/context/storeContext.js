import React, { useState, useContext } from "react";

const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function ContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [spell, setSpell] = useState([]);
  const [searchSpell, setSearchSpell] = useState([]);
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [inhaltsverzeichnis, setInhaltsverzeichnis] = useState([]);
  const [volk, setVolk] = useState([]);
  const [klassen, setKlassen] = useState([]);
  const [ausrüstung, setAusrüstung] = useState([]);
  const [gesinnung, setGesinnung] = useState([]);
  const [sprachen, setSprachen] = useState([]);
  const [hintergrund, setHintergrund] = useState([]);
  const [filterHintergrund, setFiltrHintergrund] = useState([]);
  const [user, setUser] = useState([]);
  const [klassenZauber, setKlassenZauber] = useState([]);
  const [waffen, setWaffen] = useState([]);
  const [rüstung, setRüstung] = useState([]);
  const [werkzeuge, setWerkzeuge] = useState([]);
  const [profileImage, setProfileImage] = useState({img: ""});

  return (
    <StoreContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
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
        werkzeuge,
        setWerkzeuge,
        klassenZauber,
        setKlassenZauber,
        profileImage,
        setProfileImage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
