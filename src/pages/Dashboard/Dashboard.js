import React, { useState } from "react";
import { useStore } from '../../context/storeContext.js'
import axios from "axios";
import style from "../RegisterUndLogin/registerLogin.module.css";


export default function Dashboard() {
    const { isLoggedIn, user } = useStore()
    const [passwordChange, setPasswordChange] = useState({
        password: "",
        newPassword: ""
    });
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        console.log(passwordChange)
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/user/new-password",
                passwordChange,
                { withCredentials: true }
            );
            console.log(response);
            // setUser(response.data.userWithoutPassword);
            setMessage(response.data.message);
            // setIsLoggedIn(true);

            // localStorage.setItem("token", data.data.token);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            {isLoggedIn && (
                <div className="container">
                    <h3>Personliche Daten</h3>
                    <p>Name:{user.userName}</p>
                    <p>Email:{user.email}</p>
                    <div className={style.login}>
                        <h2>Passwort änderung</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="password"
                                placeholder="Passwort"
                                onChange={(e) =>
                                    setPasswordChange({ ...passwordChange, password: e.target.value })
                                }
                            />
                            <input
                                type="password"
                                name="newPasswort"
                                placeholder="neue Passwort"
                                onChange={(e) =>
                                    setPasswordChange({ ...passwordChange, newPassword: e.target.value })
                                }
                            />
                            <input className={style.loginButton} type="submit" value="Login" />
                            <p>{message}</p>
                        </form>
                    </div>
                </div>

            )}
        </div>
    );
}
