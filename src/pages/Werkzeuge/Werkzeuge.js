import React, { useEffect, useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./werkzeuge.module.css";
import { faviriteStatus, filterDurchParams, filterDurchParamsName } from "../../helper/FaviriteStatus";
import { useNavigate, useParams } from "react-router-dom";

export default function Werkzeuge() {
  const { werkzeuge } = useStore();
  const [filterWerkzeuge, setFilterWerkzeuge] = useState([]);
  const { user, setUser } = useStore();
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (id) { filterDurchParamsName(werkzeuge, setFilterWerkzeuge, id) }
  }, [werkzeuge])

  const onChangeWerkzeug = (event) => {
    const value = event.target.value;
    navigate(`/werkzeuge/${value}`)

    const klasseWerkzeuge = werkzeuge.filter((info) => {
      return info.name === value;
    });
    setFilterWerkzeuge(klasseWerkzeuge);
  };
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
            <label>Werkzeug auswählen:</label>
            <select onChange={onChangeWerkzeug}>
              <option>Werkzeug auswählen</option>
              {werkzeuge.map((werkzeug, i) => {
                return <option value={werkzeug.name} selected={id === werkzeug.name} key={i}>{werkzeug.name}</option>;
              })}
            </select>
          </div>
        </div>
        {filterWerkzeuge.length > 0 && (
          <div className={`${style.werkzeug} "cardInfo"`}>
            <h2>{filterWerkzeuge[0].name}</h2>
            <p>{filterWerkzeuge[0].beschreibung}</p>

            {filterWerkzeuge[0].array.map((werkzeug, i) => {
              return (
                <div key={i} className={style.werkzeug}>
                  <h3>{werkzeug.name}</h3>

                  <p>
                    Kosten: {werkzeug.kosten} Kupfer
                    <br />
                    Gewicht: {werkzeug.gewicht} Pfund
                  </p>
                  {user.data.includes(werkzeug._id) ? (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(werkzeug._id, true)}
                    >
                      <i
                        className="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(werkzeug._id, false)}
                    >
                      <i
                        className="fa-regular fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  )}

                  {werkzeug.hasOwnProperty("beschreibung") && (
                    <p>{werkzeug.beschreibung}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
