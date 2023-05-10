import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus } from "../../helper/FaviriteStatus";
import style from "./dashboard.module.css";






export default function Dashboard() {
  const { isLoggedIn, user, setUser, profileImage, setProfileImage, spell, waffen, rüstung } = useStore();
  const [passwordChange, setPasswordChange] = useState({
    password: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");
  const [favoriten, setFavoriten] = useState([]);
  const [select, setSelect] = useState("");



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
    }
  };
  const allData = { Zauber: spell, Waffe: waffen, Rüstung: rüstung }

  useEffect(() => {
    setFavoriten([])

    if (select !== "Favorite auswählen" && select) {

      allData[select].forEach((item) => {
        if (user.data.includes(item._id)) {
          setFavoriten(favoriten => [...favoriten, item])

        }
      })
    }

  }, [user, select])



  const deleteFavorite = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status).then((response) => setUser(response.data.userWithoutPassword)).catch((err) => console.log(err));
  }
  return (
    <div>
      {isLoggedIn && (
        <div className="container">
          <h3>Persönliche Daten</h3>
          {user.image.length > 0 && (<img className={style.profileImage} src={user.image} alt="profilbild" />)}
          <p>Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <div className={style.passwordChange}>
            <h2>Passwort ändern</h2>
            <form className={style.form} onSubmit={handleSubmit}>
              <input type="file" onChange={setImage} />
              <button onClick={handleSubmit2}>Upload</button>
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
              <input type="submit" value="Speichern" />
              {message && <p className={style.msg}>{message}</p>}
            </form>
          </div>

          <div className="cards">
            Favoriten
            <div className="selectContainer">
              <div className="select">
                <label>Favorire auswählen:</label>
                <select onChange={(event) => setSelect(event.target.value)}>
                  <option>Favorite auswählen</option>
                  {/* <option>Zauber</option>
                  <option>Waffe</option>
                  <option>Rüstung</option> */}
                  {Object.keys(allData).map((select) => {
                    return <option key={select}>{select}</option>
                  })}

                </select>
              </div>
            </div>
            {favoriten.length > 0 ? favoriten.map((item) => {
              return <div className="favoriteItem "> <p key={item._id} className="favorite">{item.name}</p><i class="fa-sharp fa-solid fa-trash " onClick={() => deleteFavorite(item._id, true)} style={{ color: "#ff0000", padding: "1rem", cursor: "pointer" }}></i></div>
            }) : "Bitte erst auswählen"}
          </div>
        </div>
      )}
    </div>
  );
}
