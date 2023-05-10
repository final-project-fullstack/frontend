import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { useNavigate, useParams } from "react-router-dom";

export default function Klassen() {
  const {id} = useParams()
const navigate = useNavigate()
  const { klassen } = useStore();
  const [filterKlasse, setFilterKlasse] = useState([]);
  const onChangeKlasse = (event) => {
    const value = event.target.value;
    navigate(`/klassen/${value}`)
    const klasseFilter = klassen.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterKlasse(klasseFilter);
  };

  const klasseInfo = klassen.filter((klasse) => klasse.name === "KLASSEN");

  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
            <label>Klasse auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option value="">Klasse auswählen</option>
              <option value="Barbar" selected={id==="Barbar"}>Barbar</option>
              <option value="Barde" selected={id==="Barde"}>Barde</option>
              <option value="Druide" selected={id==="Druide"}>Druide</option>
              <option value="Hexenmeister" selected={id==="Hexenmeister"}>Hexenmeister</option>
              <option value="Kämpfer" selected={id==="Kämpfer"}>Kämpfer</option>
              <option value="Kleriker" selected={id==="Kleriker"}>Kleriker</option>
              <option value="Magier" selected={id==="Magier"}>Magier</option>
              <option value="Mönch" selected={id==="Mönch"}>Mönch</option>
              <option value="Paladin" selected={id==="Paladin"}>Paladin</option>
              <option value="Schurke" selected={id==="Schurke"}>Schurke</option>
              <option value="Waldläufer " selected={id==="Waldläufer"}>Waldläufer</option>
              <option value="Zauberer" selected={id==="Zauberer"}>Zauberer</option>
            </select>
          </div>
        </div>
        {filterKlasse.length > 0 ? (
          <>
            {filterKlasse.map((klasse, i) => {
              return (
                <div className="cardInfo" key={i}>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <label>Speichern</label>
                  </div>
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
        ) : (
          <div className="cardInfo">
            {klassen.length > 0 && (
              <div>
                <h3>{klasseInfo[0].name}</h3>
                {klasseInfo[0].text.map((info, i) => (
                  <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
