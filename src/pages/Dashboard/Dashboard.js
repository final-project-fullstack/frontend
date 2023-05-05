// import React, { useEffect, useState } from "react";
// import { useStore } from "../../context/storeContext.js";
// import axios from "axios";
// import style from "./dashboard.module.css";

// export default function Dashboard() {
//   const { isLoggedIn, user, setIsLoggedIn, setUser } = useStore();
//   const [passwordChange, setPasswordChange] = useState({
//     password: "",
//     newPassword: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/user/new-password",
//         passwordChange,
//         { withCredentials: true }
//       );
//       setMessage(response.data.msg);
//     } catch (error) {
//       setMessage(error.message);
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn && (
//         <div className="container">
//           <h3>Persönliche Daten</h3>
//           <p>Name: {user.userName}</p>
//           <p>Email: {user.email}</p>
//           <div className={style.passwordChange}>
//             <h2>Passwort ändern</h2>
//             <form className={style.form} onSubmit={handleSubmit}>
//               <input
//                 className={style.input}
//                 type="password"
//                 name="password"
//                 placeholder="Aktuelles Passwort"
//                 onChange={(e) =>
//                   setPasswordChange({
//                     ...passwordChange,
//                     password: e.target.value,
//                   })
//                 }
//               />
//               <input
//                 className={style.input}
//                 type="password"
//                 name="newPasswort"
//                 placeholder="Neues Passwort"
//                 onChange={(e) =>
//                   setPasswordChange({
//                     ...passwordChange,
//                     newPassword: e.target.value,
//                   })
//                 }
//               />
//               <input type="submit" value="Speichern" />
//               {message && <p className={style.msg}>{message}</p>}
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useStore } from "../../context/storeContext.js";
import axios from "axios";
import style from "./dashboard.module.css";

export default function Dashboard() {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useStore();
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

  const handleFileUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSelectedFile(null);
      setMessage(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
          <div className={style.fileUpload}>
            <h2>Datei hochladen</h2>
            <form onSubmit={handleFileUpload}>
              <input type="file" onChange={handleFileChange} />
              <input type="submit" value="Senden" />
              {message && <p className={style.msg}>{message}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
