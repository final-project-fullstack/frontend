import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";

export default function Rüstung() {
  const { rüstung } = useStore();
  const [filterRüstung, setFilterRüstung] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const rüstungFilter = rüstung.filter((info) => {
      return info.kategorie === value;
    });
    setFilterRüstung(rüstungFilter);
  };
  console.log(rüstung);

  return (
    <div className="container">
      <div className="cards">
        <div className="select">
          <div className="select-volk">
            <label>Rüstung auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Rüstung auswählen</option>
              <option>leichte Rüstung</option>
              <option>mittelschwere Rüstung</option>
              <option>schwere Rüstung</option>
              <option>Schilde</option>
            </select>
          </div>
        </div>
        {filterRüstung.length > 0 && (
          <>
            {filterRüstung.map((waffe, i) => {
              return (
                <div className="volk waffen" key={i}>
                  <h3>{waffe.name}</h3>
                  <p>Kosten: {waffe.kosten} Kupfer</p>
                  <p>Gewicht: {waffe.gewicht} Pfund</p>
                  <p>Stärke: {waffe.staerke}</p>
                  <p>Rüstungsklasse: {waffe.ruestungsklasse}</p>
                  <p>Heimlichkeit: {waffe.heimlichkeit}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
