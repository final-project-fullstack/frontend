import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus } from "../../helper/FaviriteStatus";
import { Link } from "react-router-dom";
import style from "./dashboard.module.css";

export default function Dashboard() {
  const {
    isLoggedIn,
    user,
    setUser,
    profileImage,
    setProfileImage,
    spell,
    waffen,
    rüstung,
    volk,
    klassen,
    hintergrund,
    ausrüstung,
    werkzeuge
  } = useStore();
  const [passwordChange, setPasswordChange] = useState({
    password: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");
  const [favoriten, setFavoriten] = useState([]);
  const [select, setSelect] = useState("");

  console.log(klassen)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/new-password",
        passwordChange,
        { withCredentials: true }
      );
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.message);
      console.log(error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/uploadImage",
        profileImage,
        { withCredentials: true }
      );
      setMessage(response.data.msg);
      window.location.reload();
    } catch (error) {
      setMessage(error.message);
      window.location.reload();
      console.log(error);
    }
  };

  function setImage(evt) {
    const file = evt.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = (evt) => {
      const fileData = fileReader.result;

      //Je nach Input (evt.target) wird Front- oder Backimage gesetet
      setProfileImage({ img: fileData });
    };
  }
  const allData = { Volk: [volk, "v%C3%B6lker"], Klass: [klassen, "klassen"], Hintergrund: [hintergrund, "hintergrund"], Zauber: [spell, "zauber"], Waffe: [waffen, "waffen"], Rüstung: [rüstung, "rüstung"], Ausrüstung: [ausrüstung, "abenteuerausrüstung"], Werkzeuge: [werkzeuge, "werkzeuge"] };

  const link = (name) => {

    var oneLink = ""
    console.log(allData[select])
    allData[select][0].forEach((item) => {
      if (item.name === name) {
        if (select === "Rüstung") {
          oneLink = `rüstung/${item.kategorie}`
        } else if (select === "Waffe") {
          oneLink = `waffen/${item.kategorie}`
        }
      }

    })
    return oneLink

  }

  useEffect(() => {
    setFavoriten([]);

    if (select !== "Favorit auswählen" && select) {
      allData[select].forEach((item) => {
        if (user.data.includes(item._id)) {
          setFavoriten((favoriten) => [...favoriten, item]);
        }
      });
    }
  }, [user, select]);

  useEffect(() => {
    setFavoriten([]);

    if (select !== "Favorit auswählen" && select) {
      allData[select][0].forEach((item) => {
        if (user.data.includes(item._id)) {
          setFavoriten((favoriten) => [...favoriten, item]);
        }
      });
    }
  }, [user, select]);

  const deleteFavorite = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {isLoggedIn && (
        <div className="cards">
          <h3 className={style.h3}>Persönliche Daten</h3>
          <div className={`${style.datenContainer} `}>
            <p className={style.p}>Name: {user.userName}</p>
            <p className={style.p}>Email: {user.email}</p>
          </div>
          {user.image.length > 0 && (
            <img
              className={style.profileImage}
              src={user.image}
              alt="profilbild"
            />
          )}

          <input className={style.margin} type="file" onChange={setImage} />
          <button className={style.marginTop} onClick={handleSubmit2}>
            Upload
          </button>
          <div className={style.passwordChange}>
            <h2>Passwort ändern</h2>
            <form className={style.form} onSubmit={handleSubmit}>
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Aktuelles Passwort"
                onChange={(e) =>
                  setPasswordChange({
                    ...passwordChange,
                    password: e.target.value,
                  })
                }
              />
              <input
                className={style.input}
                type="password"
                name="newPasswort"
                placeholder="Neues Passwort"
                onChange={(e) =>
                  setPasswordChange({
                    ...passwordChange,
                    newPassword: e.target.value,
                  })
                }
              />
              <input className={style.margin} type="submit" value="Speichern" />
              {message && <p className={style.msg}>{message}</p>}
            </form>
          </div>
          <div className={style.marginTop}>
            <div className="cards">
              <h3>Favoriten</h3>
              <br />

              <div className="selectContainer">
                <div className="select">
                  <label>Favorit auswählen:</label>
                  <select onChange={(event) => setSelect(event.target.value)}>
                    <option>Favorit auswählen</option>

                    {Object.keys(allData).map((select) => {
                      return <option key={select}>{select}</option>;
                    })}
                  </select>
                </div>
              </div>
              {favoriten.length > 0
                ? favoriten.map((item) => {
                  return (
                    <div key={item._id} className="favoriteItem ">
                      {" "}
                      {select === "Volk" | select === "Klass" | select === "Hintergrund" ? <p className="favorite"><Link to={`/${allData[select][1]}/${item.name}`}>{item.name}</Link></p> : null}
                      {select === "Zauber" ? <p className="favorite"><Link to={`/${allData[select][1]}`}>{item.name}</Link></p> : null}
                      {select === "Waffe" | select === "Rüstung" ? <p className="favorite"><Link to={`/${link(item.name)}`}>{item.name}</Link></p> : null}


                      <i
                        class="fa-sharp fa-solid fa-trash "
                        onClick={() => deleteFavorite(item._id, true)}
                        style={{
                          color: "#ff0000",
                          padding: "1rem",
                          cursor: "pointer",
                        }}
                      ></i>
                    </div>
                  );
                })
                : "Bitte erst auswählen"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
