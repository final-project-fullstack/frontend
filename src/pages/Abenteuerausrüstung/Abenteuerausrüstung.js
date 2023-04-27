import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./ausruestung.module.css";

export default function Abenteuerausrüstung() {
  const { ausrüstung } = useStore();
  const [filterAusrüstung, setFilterAusrüstung] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = ausrüstung.filter((info) => {
      console.log(info);
      return info.name === value;
    });
    setFilterAusrüstung(klasseFilter);
  };
  console.log(filterAusrüstung);

  return (
    <div className="container">
      <div className={`${style.ausrüstung} ausrüstung`}>
        <div className="select">
          <div className="select-volk">
            <label>Ausrüstung auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Ausrüstungen</option>
              {ausrüstung.map((name, i) => (
                <option key={i}>{name.name}</option>
              ))}
            </select>
          </div>
        </div>

        {filterAusrüstung.length > 0 && (
          <div className={`${style.volk} volk`}>
            {filterAusrüstung[0].array.map((item, i) => {
              return (
                <div key={item._id}>
                  <h3>{item.name}</h3>

                  {item.hasOwnProperty("kosten") && (
                    <p>
                      Kosten: {item.kosten} Kupfer <br />
                      Gewicht: {item.gewicht} Pfund
                    </p>
                  )}

                  {item.hasOwnProperty("fassungsvermögen") && (
                    <p>
                      Fassungsvermögen: {item.fassungsvermögen / 1000} Liter
                    </p>
                  )}

                  {item.hasOwnProperty("kapazität") && (
                    <p>Kapazität: {item.kapazität} Pfd. Ausrüstung</p>
                  )}

                  {item.hasOwnProperty("beschreibung") && (
                    <p>{item.beschreibung}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
