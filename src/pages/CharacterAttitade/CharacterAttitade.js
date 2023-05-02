import React, { useEffect, useState } from "react";
import { useStore } from '../../context/storeContext.js'
import axios from "axios";



export default function CharacterAttitude() {
    const { gesinnung } = useStore()
    console.log(gesinnung)

    const onChangeKlasse = (event) => {
        // const value = event.target.value;
        // const klasseFilter = klassen.filter((info) => {
        //     return info.name === value.toUpperCase();
        // });
        // setFilterKlasse(klasseFilter);
    };



    return (
        <div>
            <div className="select-gesinung">
                <label>Gesinung auswählen:</label>

                <select onChange={onChangeKlasse}>
                    {gesinnung && gesinnung.map(item => {
                        return <option>{item.name}</option>
                    })}

                </select>
            </div>
        </div>
    );
}
