import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./waffen.module.css";
import { faviriteStatus } from "../../helper/FaviriteStatus";
import { useNavigate, useParams } from "react-router-dom";

export default function Waffen() {
  const { waffen } = useStore();
  const [filterWaffen, setFilterWaffen] = useState([]);
  const { user, setUser } = useStore();
  const {id} = useParams()
  const navigate = useNavigate()
  const onChangeWaffe = (event) => {
    const value = event.target.value;
    navigate(`/waffen/${value}`)

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
            <select onChange={onChangeWaffe}>
              <option value="" >Waffe auswählen</option>
              <option value="Einfache Nahkampfwaffen" selected={id==="Einfache Nahkampfwaffen"}>Einfache Nahkampfwaffen</option>
              <option value="Einfache Fernkampfwaffen" selected={id==="Einfache Fernkampfwaffen"}>Einfache Fernkampfwaffen</option>
              <option value="Nahkampfs-Kriegswaffen" selected={id==="Nahkampfs-Kriegswaffen"}>Nahkampf-Kriegswaffen</option>
              <option value="Fernkampf-Kriegswaffen" selected={id==="Fernkampf-Kriegswaffen"}>Fernkampf-Kriegswaffen</option>
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
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(waffe._id, true)}
                    >
                      <i
                        class="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={"bookmark"}
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
