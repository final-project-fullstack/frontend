import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./werkzeuge.module.css";

export default function Werkzeuge() {
  const { werkzeuge } = useStore();
  const [filterWerkzeuge, setFilterWerkzeuge] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseWerkzeuge = werkzeuge.filter((info) => {
      return info.name === value;
    });
    setFilterWerkzeuge(klasseWerkzeuge);
  };
  console.log(filterWerkzeuge);

  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
            <label>Werkzeug auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Werkzeug auswählen</option>
              {werkzeuge.map((werkzeug, i) => {
                return <option key={i}>{werkzeug.name}</option>;
              })}
            </select>
          </div>
        </div>
        {filterWerkzeuge.length > 0 && (
          <div className={`${style.werkzeug} "cardInfo"`}>
            <h2>{filterWerkzeuge[0].name}</h2>
            <p>{filterWerkzeuge[0].beschreibung}</p>

            {filterWerkzeuge[0].array.map((werkzeug, i) => {
              return (
                <div key={i}>
                  <h3>{werkzeug.name}</h3>

                  <p>
                    Kosten: {werkzeug.kosten} Kupfer
                    <br />
                    Gewicht: {werkzeug.gewicht} Pfund
                  </p>

                  {werkzeug.hasOwnProperty("beschreibung") && (
                    <p>{werkzeug.beschreibung}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
