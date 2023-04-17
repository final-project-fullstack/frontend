import axios from "axios";
import { useContext, useState } from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Zauber = () => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState({
    klasse: "",
    grad: Number,
  });
  const {
    isLoggedIn,
    spell,
    setSearchSpell,
    searchSpell,
    filteredSpells,
    setFilteredSpells,
    inhaltsverzeichnis,
    setInhaltsverzeichnis,
  } = useContext(userContext);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, klasse: value }));
  };
  const onChangeGrad = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, grad: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const spellFilter = spell.filter((spell) => {
      return (
        spell.klassen.includes(selectValue.klasse) &&
        spell.grad === selectValue.grad
      );
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis(spellFilter);
  };

  const handleSaveSpell = async (egal) => {
    const response = await axios.post(
      "http://localhost:3001/user/addspell",
      egal,
      { withCredentials: true }
    );
    console.log(response);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const spellFilter = spell.filter((spell) => {
      return spell.name.includes(searchSpell);
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis([]);
    navigate("/zauber");
  };
  const changeValue = (e) => {
    setSearchSpell(e.target.value);
  };

  return (
    <div>
      <form className="search">
        <input
          onChange={changeValue}
          type="text"
          placeholder="Suchen"
          list="Zauber"
        />
        <datalist id="Zauber">
          {spell.map((spell) => {
            return <option key={spell.name} value={spell.name} />;
          })}
        </datalist>
        <button type="submit" onClick={handleSearch}>
          Senden
        </button>
      </form>
      <div className="select-inhaltsverzeichnis">
        <form
          className="home-form"
          onSubmit={selectValue !== "" ? handleSubmit : null}
        >
          <div className="select">
            <div className="select-klasse">
              <label>Klasse auswählen:</label>
              <select onChange={onChangeKlasse}>
                <option>Klasse auswählen</option>
                <option>Barde</option>
                <option>Druide</option>
                <option>Hexenmeister</option>
                <option>Kleriker</option>
                <option>Magier</option>
                <option>Paladin</option>
                <option>Waldläufer</option>
                <option>Zauberer</option>
              </select>
            </div>
            <div className="select-grad">
              <label>Grad auswählen:</label>
              <select onChange={onChangeGrad}>
                <option>Grad auswählen</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>
          </div>
          <button type="submit">Suchen</button>
        </form>

        <div className="inhaltsverzeichnis">
          {inhaltsverzeichnis.length > 0 && <h2>Inhaltsverzeichnis</h2>}
          <p>{inhaltsverzeichnis.length} Zauber</p>
          <ul>
            {inhaltsverzeichnis.map((header) => {
              return (
                <a key={header._id} href={"#" + header.name}>
                  <li>{header.name}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="alle-zauber">
        {filteredSpells.length > 0 ? (
          filteredSpells.map((spell) => {
            return (
              <div className="zauber" key={spell._id}>
                <h3 id={spell.name}>{spell.name}</h3>
                {spell.grad > 0 ? (
                  <p>
                    {spell.schule} des {spell.grad}. grades
                  </p>
                ) : (
                  <p>Zaubertrick der {spell.schule}</p>
                )}
                <p>
                  Zeitaufwand: {spell.zeitaufwand} <br />
                  Reichweite: {spell.reichweite} <br />
                  Koponenten: {spell.komponenten} <br />
                  Wirkungsdauer: {spell.wirkungsdauer}
                </p>
                <div>
                  {spell.text.map((info, i) => (
                    <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                  ))}
                </div>
                {isLoggedIn === true && (
                  <button onClick={() => handleSaveSpell(spell)}>
                    Speichern
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>Bitte erst Klasse und Grad auswählen</p>
        )}
      </div>
    </div>
  );
};

export default Zauber;
