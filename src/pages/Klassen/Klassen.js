import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus } from "../../helper/FaviriteStatus";

export default function Klassen() {
  const { klassen, user, setUser } = useStore();
  const [filterKlasse, setFilterKlasse] = useState([]);

  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const klasseFilter = klassen.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterKlasse(klasseFilter);
  };

  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };

  const klasseInfo = klassen.filter((klasse) => klasse.name === "KLASSEN");

  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
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
        {filterKlasse.length > 0 ? (
          <>
            {filterKlasse.map((klasse, i) => {
              return (
                <div className="cardInfo" key={i}>
                  <h3 key={i}>{klasse.name}</h3>
                  {klasse.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}

                  {user.data.includes(klassen._id) ? (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(klassen._id, true)}
                    >
                      <i
                        class="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(klassen._id, false)}
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
