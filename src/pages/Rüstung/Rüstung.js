import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import axios from "axios";


export default function Rüstung() {
  const { rüstung, user, setUser } = useStore();
  const [filterRüstung, setFilterRüstung] = useState([]);

  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"


  const onChangeKlasse = (event) => {
    const value = event.target.value;
    const rüstungFilter = rüstung.filter((info) => {
      return info.kategorie === value;
    });
    setFilterRüstung(rüstungFilter);
  };
  console.log(rüstung);

  const faviriteStatus = (id, status) => {
    console.log(status)
    if (!status) {
      axios
        .post(`${BACKEND_URL}/user/new-favorite`, { id: id }, { withCredentials: true })

        .then((response) => setUser(response.data.userWithoutPassword))
        .catch((err) => console.log(err));
    } else {
      console.log(id)
      axios
        .post(`${BACKEND_URL}/user/delete-favorite`, { id: id }, { withCredentials: true })

        .then((response) => setUser(response.data.userWithoutPassword))
        .catch((err) => console.log(err));
    }

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
                  {/* <div onClick={() => faviriteStatus(waffe._id)} className={isFavorite(waffe._id)}>
                    <input type="checkbox" />
                    <label>Speichern</label>
                  </div> */}
                  {user.data.includes(waffe._id) ? <div onClick={() => faviriteStatus(waffe._id, true)} className="favorite">

                    <label>Löschen</label>
                  </div> : <div onClick={() => faviriteStatus(waffe._id, false)} className="noFavorite">

                    <label>Speichern</label>
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
