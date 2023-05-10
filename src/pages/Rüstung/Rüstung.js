import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus } from "../../helper/FaviriteStatus";

import axios from "axios";


export default function Rüstung() {
  const { rüstung, user, setUser } = useStore();
  const [filterRüstung, setFilterRüstung] = useState([]);

  // const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"


  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const rüstungFilter = rüstung.filter((info) => {
      return info.kategorie === value;
    });
    setFilterRüstung(rüstungFilter);
  };
  console.log(rüstung);



  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status).then((response) => setUser(response.data.userWithoutPassword)).catch((err) => console.log(err));

  }


  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
            <label>Rüstung auswählen:</label>
            <select onChange={onChangeKlasse}>
              <option>Rüstung auswählen</option>
              <option>leichte Rüstung</option>
              <option>mittelschwere Rüstung</option>
              <option>schwere Rüstung</option>
              <option>Schilde</option>
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

                  {user.data.includes(waffe._id) ? <div onClick={() => faviriteStatus2(waffe._id, true)} >

                    <i class="fa-regular fa-bookmark " style={{ color: "#ff0000" }}></i>
                  </div> : <div onClick={() => faviriteStatus2(waffe._id, false)} >

                    <i class="fa-regular fa-bookmark "></i>
                  </div>}
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
