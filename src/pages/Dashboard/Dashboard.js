import React, { useEffect, useState } from "react";
import { useStore } from '../../context/storeContext.js'
import axios from "axios";
import style from "./dashboard.module.css";


export default function Dashboard() {
    const { isLoggedIn, user, setIsLoggedIn, setUser } = useStore()
    const [passwordChange, setPasswordChange] = useState({
        password: "",
        newPassword: ""
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
            setMessage(error.message)
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
                    <div className={style.passwordChange}>
                        <h2>Passwort änderung</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                className=""
                                type="password"
                                name="password"
                                placeholder="Dein Passwort"
                                onChange={(e) =>
                                    setPasswordChange({ ...passwordChange, password: e.target.value })
                                }
                            />
                            <input className=""
                                type="password"
                                name="newPasswort"
                                placeholder="Neue Passwort"
                                onChange={(e) =>
                                    setPasswordChange({ ...passwordChange, newPassword: e.target.value })
                                }
                            />
                            <input type="submit" value="Ändern" />
                            {message && <p className={style.msg}>{message}</p>}
                        </form>
                    </div>
                </div>

            )}
        </div>
    );
}
