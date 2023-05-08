import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";

export default function Völker() {
  const { volk } = useStore();
  const [filterVolk, setFilterVolk] = useState([]);
  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  volk.sort(sortArray);
  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = volk.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterVolk(volkFilter);
  };

  const volkInfo = volk.filter((volk) => volk.name === "VÖLKER");

  return (
    <>
      <div className="cards">
        {volk.length > 0 && (
          <div className="selectContainer">
            <div className="select">
              <label>Volk auswählen:</label>
              <select onChange={onChangeVolk}>
                <option>Volk auswählen</option>
                <option>Elfen</option>
                <option>Drachenblütige</option>
                <option>Gnome</option>
                <option>Halbelfen</option>
                <option>Halblinge</option>
                <option>Menschen</option>
                <option>Tieflinge</option>
                <option>Zwerge</option>
              </select>
            </div>
          </div>
        )}
        {filterVolk.length > 0 ? (
          <>
            {filterVolk.map((volk, i) => {
              return (
                <div className="cardInfo" key={i}>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <label>Speichern</label>
                  </div>
                  <h3 key={i}>{volk.name}</h3>
                  {volk.text.map((info, i) => {
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
            {volk.length > 0 && (
              <div>
                <h3>{volkInfo[0].name}</h3>
                {volkInfo[0].text.map((info, i) => (
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
