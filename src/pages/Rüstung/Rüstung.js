import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus } from "../../helper/FaviriteStatus";
import { useNavigate, useParams } from "react-router-dom";

export default function Rüstung() {
  const { rüstung, user, setUser } = useStore();
  const [filterRüstung, setFilterRüstung] = useState([]);
  const {id} = useParams()
const navigate = useNavigate()
  // const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"


  const onChangeRüstung = (event) => {
    const value = event.target.value;
    navigate(`/rüstung/${value}`)

    const rüstungFilter = rüstung.filter((info) => {
      return info.kategorie === value;
    });
    setFilterRüstung(rüstungFilter);
  };
  console.log(rüstung);

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
            <label>Rüstung auswählen:</label>
            <select onChange={onChangeRüstung}>
              <option value="">Rüstung auswählen</option>
              <option value="leichte Rüstung" selected={id === "leichte Rüstung"}>leichte Rüstung</option>
              <option value="mittelschwere Rüstung" selected={id === "mittelschwere Rüstung"}>mittelschwere Rüstung</option>
              <option value="schwere Rüstung" selected={id === "schwere Rüstung"}>schwere Rüstung</option>
              <option value="Schilde" selected={id === "Schilde"}>Schilde</option>
            </select>
          </div>
        </div>
        {filterRüstung.length > 0 && (
          <>
            {filterRüstung.map((waffe, i) => {
              return (
                <div className="cardInfo waffen" key={i}>
                  <h3>{waffe.name}</h3>
                  <p>Kosten: {waffe.kosten} Kupfer</p>
                  <p>Gewicht: {waffe.gewicht} Pfund</p>
                  <p>Stärke: {waffe.staerke}</p>
                  <p>Rüstungsklasse: {waffe.ruestungsklasse}</p>
                  <p>Heimlichkeit: {waffe.heimlichkeit}</p>

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
