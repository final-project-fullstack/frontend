import { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { useNavigate } from "react-router-dom";
import style from "./zauber.module.css";
import "../../App.css";
import { faviriteStatus } from "../../helper/FaviriteStatus";

const Zauber = () => {
  const navigate = useNavigate();
  const [klasseFilter, setKlasseFilter] = useState([]);
  const { user, setUser } = useStore();

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
    klassenZauber,
  } = useStore();

  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, klasse: value }));
    const filterGrad = klassenZauber.filter((klasse) => klasse.name === value);
    setKlasseFilter(filterGrad);
  };
  const onChangeGrad = (event) => {
    const value = event.target.value;
    setSelectValue((selectValue) => ({ ...selectValue, grad: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const spellFilter = spell.sort(SortArray).filter((spell) => {
      return (
        spell.klassen.includes(selectValue.klasse) &&
        spell.grad === selectValue.grad
      );
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis(spellFilter);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const spellFilter = spell.sort(SortArray).filter((spell) => {
      return spell.name.includes(searchSpell);
    });
    setFilteredSpells(spellFilter);
    setInhaltsverzeichnis([]);
    navigate("/zauber");
  };
  const changeValue = (e) => {
    setSearchSpell(e.target.value);
  };

  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className={style.search}>
        <input
          class={style.input}
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
        <button
          className={style.searchButton}
          type="submit"
          onClick={handleSearch}
        >
          Senden
        </button>
      </form>
      <div className={style.selectInhaltsverzeichnis}>
        <form
          className={style.zauberForm}
          onSubmit={selectValue !== "" ? handleSubmit : null}
        >
          <div className={style.select}>
            <div className={style.selectKlasse}>
              <label>Klasse auswählen:</label>
              <select onChange={onChangeKlasse}>
                <option>Klasse auswählen</option>
                {klassenZauber.map((klasse, i) => (
                  <option key={i}>{klasse.name}</option>
                ))}
              </select>
            </div>
            <div className={style.selectGrad}>
              <label>Grad auswählen:</label>
              <select onChange={onChangeGrad}>
                <option>Grad auswählen</option>
                {klasseFilter.length > 0 &&
                  klasseFilter[0].grade.map((number, i) => (
                    <option key={i}>{number}</option>
                  ))}
              </select>
            </div>
          </div>
          <button type="submit">Suchen</button>
        </form>

        <div className={style.inhaltsverzeichnis}>
          {inhaltsverzeichnis.length > 0 && <h2>Inhaltsverzeichnis</h2>}
          <ul>
            <p>{inhaltsverzeichnis.length} Zauber</p>
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
      <div className={style.alleZauber}>
        {filteredSpells.length > 0 ? (
          filteredSpells.map((spell) => {
            return (
              <div className={style.zauber} key={spell._id}>
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

                {user.data.includes(spell._id) ? (
                  <div
                    className={style.bookmark}
                    onClick={() => faviriteStatus2(spell._id, true)}
                  >
                    {/* <label>Löschen</label> */}
                    <i
                      className="fa-solid fa-bookmark"
                      style={{ color: "#30475E" }}
                    ></i>
                  </div>
                ) : (
                  <div
                    className={style.bookmark}
                    onClick={() => faviriteStatus2(spell._id, false)}
                  >
                    {/* <label>Speichern</label> */}
                    <i
                      className="fa-regular fa-bookmark"
                      style={{ color: "#30475E" }}
                    ></i>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p>Bitte erst Klasse und Grad auswählen</p>
        )}
      </div>
    </>
  );
};

export default Zauber;
