import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./ausruestung.module.css";
import { faviriteStatus } from "../../helper/FaviriteStatus";
import { useNavigate, useParams } from "react-router-dom";


export default function Abenteuerausrüstung() {
  const { ausrüstung, user, setUser } = useStore();
  const [filterAusrüstung, setFilterAusrüstung] = useState([]);
  const { user, setUser } = useStore();
  const {id} = useParams()
  const navigate = useNavigate()
  


  const onChangeAusrüstung = (event) => {
    const value = event.target.value;
    navigate(`/abenteuerausrüstung/${value}`)

    const klasseFilter = ausrüstung.filter((info) => {
      console.log(info);
      return info.name === value;
    });
    setFilterAusrüstung(klasseFilter);
  };
  const faviriteStatus2 = (id, status) => {
    console.log(id, status);
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };
  console.log(ausrüstung);
  return (
    <>
      <div className="cards">
        <div className="selectContainer">
          <div className="select">
            <label>Ausrüstung auswählen:</label>
            <select onChange={onChangeAusrüstung}>
              <option>Ausrüstungen</option>
              {ausrüstung.map((name, i) => (
                <option value={name.name} selected={id=== name.name} key={i}>{name.name}</option>
              ))}
            </select>
          </div>
        </div>

        {filterAusrüstung.length > 0 && (
          <div className={`${style.card} card`}>
            {filterAusrüstung[0].array.map((item, i) => {
              return (
                <div className={style.ausrüstungCard} key={item._id}>
                  <h3 className={style.h3}>{item.name}</h3>

                  {item.hasOwnProperty("kosten") && (
                    <p>
                      Kosten: {item.kosten} Kupfer <br />
                      Gewicht: {item.gewicht} Pfund
                    </p>
                  )}

                  {item.hasOwnProperty("fassungsvermögen") && (
                    <p>
                      Fassungsvermögen: {item.fassungsvermögen / 1000} Liter
                    </p>
                  )}

                  {item.hasOwnProperty("kapazität") && (
                    <p>Kapazität: {item.kapazität} Pfd. Ausrüstung</p>
                  )}

                  {item.hasOwnProperty("beschreibung") && (
                    <p>{item.beschreibung}</p>
                  )}

                  {![
                    "Arkaner Fokus",
                    "Druidischer Fokus",
                    "Geschosse",
                    "Behälterkapazitäten",
                    "Heiliges Symbol",
                    "Ausrüstungspakete",
                  ].includes(item.name) && (
                    <div>
                      {user.data.includes(item._id) ? (
                        <div className="bookmark" onClick={() => faviriteStatus2(item._id, true)}>
                          <i
                            class="fa-solid fa-bookmark "
                            style={{ color: "#30475E" }}
                          ></i>
                        </div>
                      ) : (
                        <div className="bookmark" onClick={() => faviriteStatus2(item._id, false)}>
                          <i
                            class="fa-regular fa-bookmark "
                            style={{ color: "#30475E" }}
                          ></i>
                        </div>
                      )}
                    </div>
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
