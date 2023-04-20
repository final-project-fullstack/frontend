import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

export default function Völker() {
  const { volk} = useContext(userContext);
  const [filterVolk, setFilterVolk] = useState([]);
  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
volk.sort(sortArray)
  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = volk.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterVolk(volkFilter);
  };
  console.log(volk);

  return (
    <div className="völker">
      {volk.length> 0 && <div className="select">
        <div className="select-volk">
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
      </div>}
      {filterVolk.length > 0 ? (
        <>
          {filterVolk.map((volk, i) => {
            return (
              <div className="volk" key={i}>
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
      ) : (<div>
     {  volk.length> 0 && <div className="volk">
          <h3>{volk[7].name}</h3>
          {volk[7].text.map((info, i) => (
            <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
          ))}
        </div>}</div>
      )}
    </div>
  );
}
