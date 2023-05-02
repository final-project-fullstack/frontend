import { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./character.module.css";
import { NavLink } from "react-router-dom";

const Volk = () => {
  const { characterVolk } = useStore();
  const [filterVolk, setFilterVolk] = useState([]);
  const [filterVolksart, setFilterVolksart] = useState([]);
  const [sprache, setSprache] = useState("");
  const [zaubertrick, setZaubertrick] = useState("");
  const [attributswert, setAttributswert] = useState("");
  const [attributswert2, setAttributswert2] = useState("");
  const [fertigkeit, setFertigkeit] = useState("");
  const [fertigkeit2, setFertigkeit2] = useState("");
  const [tüftlerwerkzeug, setTüftlerwerkzeug] = useState("");

  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = characterVolk.filter((info) => {
      return info.name === value;
    });
    setFilterVolksart([]);
    localStorage.removeItem("volksart");
    setSprache("");
    localStorage.removeItem("sprache");
    setZaubertrick("");
    localStorage.removeItem("zaubertrick");
    setAttributswert("");
    localStorage.removeItem("attributswert");
    setAttributswert2("");
    localStorage.removeItem("attributswert2");
    setFertigkeit("");
    localStorage.removeItem("fertigkeit");
    setFertigkeit2("");
    localStorage.removeItem("fertigkeit2");
    setTüftlerwerkzeug("");
    localStorage.removeItem("tüftlerwerkzeug");
    setFilterVolk(volkFilter);
    localStorage.setItem("volk", value);
  };

  const onChangeVolksart = (event) => {
    const value = event.target.value;
    const volksartFilter = filterVolk[0].volksarten.filter((info) => {
      return info.name === value;
    });
    setFilterVolksart(volksartFilter);
    localStorage.setItem("volksart", value);
  };

  const onChangeVolksartSprache = (event) => {
    const value = event.target.value;
    setSprache(value);
    localStorage.setItem("sprache", value);
  };

  const onChangeVolksartZaubertrick = (event) => {
    const value = event.target.value;
    setZaubertrick(value);
    localStorage.setItem("zaubertrick", value);
  };

  const onChangeVolksartAttributswert = (event) => {
    const value = event.target.value;
    setAttributswert(value);
    localStorage.setItem("attributswert", value);
  };

  const onChangeVolksartAttributswert2 = (event) => {
    const value = event.target.value;
    setAttributswert2(value);
    localStorage.setItem("attributswert2", value);
  };

  const onChangeVolksartFertigkeit = (event) => {
    const value = event.target.value;
    setFertigkeit(value);
    localStorage.setItem("fertigkeit", value);
  };

  const onChangeVolksartFertigkeit2 = (event) => {
    const value = event.target.value;
    setFertigkeit2(value);
    localStorage.setItem("fertigkeit2", value);
  };

  const onChangeVolksartTüftlerwerkzeug = (event) => {
    const value = event.target.value;
    setTüftlerwerkzeug(value);
    localStorage.setItem("tüftlerwerkzeug", value);
  };

  console.log(filterVolk);

  return (
    <div className={style.container}>
      {/* ------------------------- Volk auswählen ------------------------- */}
      <form className={style.form}>
        <select onChange={onChangeVolk}>
          <option>-- Volk auswählen --</option>
          {characterVolk.map((volk, i) => (
            <option key={i}>{volk.name}</option>
          ))}
        </select>
      </form>
      {/* ------------------------- Volk Infotext ------------------------- */}
      <div>
        {filterVolk.length > 0 && (
          <>
            <div className={style.volkInfo}>
              {filterVolk[0].text.map((info, i) => {
                return (
                  <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                );
              })}
            </div>
            {/* ------------------------- Volksart auswählen ------------------------- */}
            {filterVolk[0].hasOwnProperty("volksarten") ? (
              <form className={style.form}>
                <select onChange={onChangeVolksart}>
                  <option>-- Volksarten --</option>
                  {filterVolk[0].volksarten.map((name, i) => {
                    return <option key={i}>{name.name}</option>;
                  })}
                </select>
              </form>
            ) : (
              <>
                {filterVolk[0].hasOwnProperty("input") && (
                  <>
                    {filterVolk[0].input.hasOwnProperty("Sprache") && (
                      <form className={style.form}>
                        <select onChange={onChangeVolksartSprache}>
                          <option>-- Sprache auswählen --</option>
                          {filterVolk[0].input.Sprache.map((sprache) => {
                            return <option key={sprache}>{sprache}</option>;
                          })}
                        </select>
                      </form>
                    )}

                    {filterVolk[0].input.hasOwnProperty("Attributswert") && (
                      <form className={style.form}>
                        <select onChange={onChangeVolksartAttributswert}>
                          <option>-- Attributswert auswählen --</option>
                          {filterVolk[0].input.Attributswert.map(
                            (attributswert) => {
                              return (
                                <option key={attributswert}>
                                  {attributswert}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </form>
                    )}

                    {filterVolk[0].input.hasOwnProperty("Attributswert2") && (
                      <form className={style.form}>
                        <select onChange={onChangeVolksartAttributswert2}>
                          <option>-- Attributswert auswählen --</option>
                          {filterVolk[0].input.Attributswert2.map(
                            (attributswert) => {
                              return (
                                <option key={attributswert}>
                                  {attributswert}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </form>
                    )}

                    {filterVolk[0].input.hasOwnProperty("Fertigkeit") && (
                      <form className={style.form}>
                        <select onChange={onChangeVolksartFertigkeit}>
                          <option>-- Fertigkeit auswählen --</option>
                          {filterVolk[0].input.Fertigkeit.map((fertigkeit) => {
                            return (
                              <option key={fertigkeit}>{fertigkeit}</option>
                            );
                          })}
                        </select>
                      </form>
                    )}

                    {filterVolk[0].input.hasOwnProperty("Fertigkeit2") && (
                      <form className={style.form}>
                        <select onChange={onChangeVolksartFertigkeit2}>
                          <option>-- Fertigkeit auswählen --</option>
                          {filterVolk[0].input.Fertigkeit2.map((fertigkeit) => {
                            return (
                              <option key={fertigkeit}>{fertigkeit}</option>
                            );
                          })}
                        </select>
                      </form>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>

      {filterVolksart.length > 0 && (
        <>
          <div className={style.volkInfo}>
            {filterVolksart[0].text.map((info, i) => {
              return <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>;
            })}
          </div>

          {filterVolksart[0].hasOwnProperty("input") && (
            <>
              {filterVolksart[0].input.hasOwnProperty("Sprache") && (
                <>
                  <form className={style.form}>
                    <select onChange={onChangeVolksartSprache}>
                      <option>-- Sprache wählen --</option>
                      {filterVolksart[0].input.Sprache.map((sprache) => {
                        return <option key={sprache}>{sprache}</option>;
                      })}
                    </select>
                  </form>
                </>
              )}

              {filterVolksart[0].input.hasOwnProperty("Zaubertrick") && (
                <form className={style.form}>
                  <select onChange={onChangeVolksartZaubertrick}>
                    <option>-- Zaubertrick wählen --</option>
                    {filterVolksart[0].input.Zaubertrick.map((zauber) => {
                      return <option key={zauber}>{zauber}</option>;
                    })}
                  </select>
                </form>
              )}

              {filterVolksart[0].input.hasOwnProperty("tüftlerwerkzeug") && (
                <form className={style.form}>
                  <select onChange={onChangeVolksartTüftlerwerkzeug}>
                    <option>-- Tüftlerwerkzeug wählen --</option>
                    {filterVolksart[0].input.tüftlerwerkzeug.map(
                      (tüftlerwerkzeug) => {
                        return (
                          <option key={tüftlerwerkzeug}>
                            {tüftlerwerkzeug}
                          </option>
                        );
                      }
                    )}
                  </select>
                </form>
              )}
            </>
          )}
        </>
      )}

      <NavLink to="charakter-erstellen/klasse-auswählen">
        <button className={style.button}>Weiter</button>
      </NavLink>
    </div>
  );
};

export default Volk;
