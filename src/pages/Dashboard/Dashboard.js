import React, { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import axios from "axios";
import style from "./dashboard.module.css";

export default function Dashboard() {
  const { isLoggedIn, user, profileImage, setProfileImage } = useStore();
  const [passwordChange, setPasswordChange] = useState({
    password: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");

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
  return (
    <div>
      {isLoggedIn && (
        <div className="container">
          <h3>Persönliche Daten</h3>
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
        </div>
      )}
    </div>
  );
}
