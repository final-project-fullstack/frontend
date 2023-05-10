import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./waffen.module.css";
import { faviriteStatus } from "../../helper/FaviriteStatus";

export default function Waffen() {
  const { waffen } = useStore();
  const [filterWaffen, setFilterWaffen] = useState([]);
  const { user, setUser } = useStore();

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = waffen.filter((info) => {
      return info.kategorie === value;
    });
    setFilterWaffen(klasseFilter);
  };
  console.log(waffen);
  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };

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
                  {user.data.includes(waffe._id) ? (
                    <div
                      className={style.bookmark}
                      onClick={() => faviriteStatus2(waffe._id, true)}
                    >
                      <i
                        class="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={style.bookmark}
                      onClick={() => faviriteStatus2(waffe._id, false)}
                    >
                      <i
                        class="fa-regular fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
