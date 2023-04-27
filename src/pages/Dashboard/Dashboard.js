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
    // const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001"
    // useEffect(() => {
    //     a()
    // }, [])
    // const a = async () => {
    //     await axios
    //         .get(`${BACKEND_URL}/user/checkCookie`, {
    //             withCredentials: true,
    //         })
    //         .then((response) => [
    //             setIsLoggedIn(response.data._id ? true : false, setUser(response.data)),
    //         ])
    //         // .then((response) => setUser(response.data))
    //         .catch((err) => console.log(err));
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)

    // }

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
                            <input type="submit" value="Ändern" />
                            {message && <p className={style.msg}>{message}</p>}
                        </form>
                    </div>
                </div>

            )}
        </div>
    );
}
