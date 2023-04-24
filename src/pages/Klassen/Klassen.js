import React, { useContext, useState } from "react";
import userContext from "../../context/userContext";

export default function Klassen() {
  const { klassen } = useContext(userContext);
  const [filterKlasse, setFilterKlasse] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = klassen.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterKlasse(klasseFilter);
  };
  console.log(klassen);

  return (
    <div className="container">
      <div className="völker">
        <div className="select">
          <div className="select-volk">
            <label>Klasse auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Klasse auswählen</option>
              <option>Barbar</option>
              <option>Barde</option>
              <option>Druide</option>
              <option>Hexenmeister</option>
              <option>Kämpfer</option>
              <option>Kleriker</option>
              <option>Magier</option>
              <option>Mönch</option>
              <option>Paladin</option>
              <option>Schurke</option>
              <option>Waldläufer</option>
              <option>Zauberer</option>
            </select>
          </div>
        </div>
        {filterKlasse.length > 0 && (
          <>
            {filterKlasse.map((klasse, i) => {
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
    </div>
  );
}
