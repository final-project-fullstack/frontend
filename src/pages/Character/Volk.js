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

  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = characterVolk.filter((info) => {
      return info.name === value;
    });
    setFilterVolk(volkFilter);
  };

  const onChangeVolksart = (event) => {
    const value = event.target.value;
    const volksartFilter = filterVolk[0].volksarten.filter((info) => {
      return info.name === value;
    });
    setFilterVolksart(volksartFilter);
    console.log(volksartFilter[0].input);
  };

  const onChangeVolksartSprache = (event) => {
    const value = event.target.value;
    setSprache(value);
  };

  const onChangeVolksartZaubertrick = (event) => {
    const value = event.target.value;
    setZaubertrick(value);
  };

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
                      <>
                        {filterVolk[0].input.Sprache.map((sprache) => {
                          return <option key={sprache}>{sprache}</option>;
                        })}
                      </>
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
            </>
          )}
        </>
      )}

      <NavLink to="charakter-erstellen/klasse-auswählen">
        <button>Weiter</button>
      </NavLink>
    </div>
  );
};

export default Volk;
