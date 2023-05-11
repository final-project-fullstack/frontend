import React, { useEffect, useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus, filterDurchParams, filterDurchParamsName } from "../../helper/FaviriteStatus";
import { useParams, useNavigate } from "react-router-dom";


export default function Völker() {
const {id} = useParams()
const navigate = useNavigate()
const { volk } = useStore();
volk.sort(sortArray);
const [filterVolk, setFilterVolk] = useState([]);
const { user, setUser } = useStore();
 useEffect(()=>{
  if (id){filterDurchParamsName(volk, setFilterVolk, id)}
 },[volk])

  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  const onChangeVolk = (event) => {
    const value = event.target.value;
    console.log("etwas")
    navigate(`/völker/${value}`)
    const volkFilter = volk.filter((info) => {
      return info.name === value.toUpperCase();
    });
    setFilterVolk(volkFilter);
  };

  const volkInfo = volk.filter((volk) => volk.name === "VÖLKER");

  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cards">
        {volk.length > 0 && (
          <div className="selectContainer">
            <div className="select">
              <label>Volk auswählen:</label>
              <select onChange={onChangeVolk}>
                <option value="Völker" selected={id=== "Völker"}>Volk auswählen</option>
                <option value="Elfen" selected={id=== "Elfen"}>Elfen</option>
                <option value="Drachenblütige" selected={id=== "Drachenblütige"}>Drachenblütige</option>
                <option value="Gnome" selected={id==="Gnome"}>Gnome</option>
                <option value="Halbelfen"selected={id==="Halbelfen"}>Halbelfen</option>
                <option value="Halblinge"selected={id==="Halblinge"}>Halblinge</option>
                <option value="Menschen"selected={id=== "Menschen"}>Menschen</option>
                <option value="Tieflinge"selected={id=== "Tieflinge"}>Tieflinge</option>
                <option value="Zwerge" selected={id=== "Zwerge"}>Zwerge</option>
              </select>
            </div>
          </div>
        )}
        {filterVolk.length > 0 ? (
          <>
            {filterVolk.map((volk, i) => {
              return (
                <div className="cardInfo" key={i}>
                  <h3 key={i}>{volk.name}</h3>
                  {volk.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}

                  {user.data.includes(volk._id) ? (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(volk._id, true)}
                    >
                      <i
                        className="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(volk._id, false)}
                    >
                      <i
                        className="fa-regular fa-bookmark "
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
