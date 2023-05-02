import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./waffen.module.css";

export default function Waffen() {
  const { waffen } = useStore();
  const [filterWaffen, setFilterWaffen] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = waffen.filter((info) => {
      return info.kategorie === value;
    });
    setFilterWaffen(klasseFilter);
  };
  console.log(waffen);

  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
            <label>Waffe auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Waffe auswählen</option>
              <option>Einfache Nahkampfwaffen</option>
              <option>Einfache Fernkampfwaffen</option>
              <option>Nahkampf-Kriegswaffen</option>
              <option>Fernkampf-Kriegswaffen</option>
            </select>
          </div>
        </div>
        {filterWaffen.length > 0 && (
          <>
            {filterWaffen.map((waffe, i) => {
              return (
                <div className={`${style.waffen} cardInfo`} key={i}>
                  <h3>{waffe.name}</h3>
                  <p>Kosten: {waffe.kosten} Kupfer</p>
                  <p>Gewicht: {waffe.gewicht} Pfund</p>
                  <p>Schaden: {waffe.schaden}</p>
                  <p>Eigenschaft: {waffe.eigenschaft}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
