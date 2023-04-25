import React from "react";
import { useStore } from '../../context/storeContext.js'

export default function Dashboard() {
    const { isLoggedIn, user } = useStore()


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
