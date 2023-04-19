import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

export default function Abenteuerausrüstung() {
  const { klassen } = useContext(userContext);
  const [filterAusrüstung, setFilterAusrüstung] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = klassen.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterAusrüstung(klasseFilter);
  };
  console.log(klassen);

  return (
    <div className="völker">
      <div className="select">
        <div className="select-volk">
          <label>Ausrüstung auswählen:</label>
          <select onChange={onChangeKlasse}>
            <option>Ausrüstungen</option>
            <option>Arkaner Fokus</option>
            <option>Druidischer Fokus</option>
            <option>Geschosse</option>
            <option>Heiliges Symbol</option>
            <option>Items</option>
            <option>Ausrüstungspakete</option>
            <option>Behälterkapazitäten</option>
          </select>
        </div>
      </div>
      {filterAusrüstung.length > 0 && (
        <>
          {filterAusrüstung.map((klasse, i) => {
            return (
              <div className="volk" key={i}>
                <h3 key={i}>{klasse.name}</h3>
                {klasse.text.map((info, i) => {
                  return (
                    <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
