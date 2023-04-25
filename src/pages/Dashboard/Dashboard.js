import React, { useContext } from "react";
import userContext from "../../context/userContext";

export default function Dashboard() {
    const { user, isLoggedIn } = useContext(userContext);

    return (
        <div>
            {isLoggedIn && (
                <div className="container">
                    <h3>Personliche Daten</h3>
                    <p>Name:{user.userName}</p>
                    <p>Email:{user.email}</p>
                </div>
            )}
        </div>
    );
}
