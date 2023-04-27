import React from "react";
import { useStore } from "../../context/storeContext";
import style from "../../pages/Character/klasseWählen.module.css";

const Barbar = () => {
  const { klasseWählen } = useStore();
  console.log(klasseWählen);
  return (
    <>
      <div className={style.trefferpunkte}>
        <h3>Treffepunkte</h3>
        <p>
          <b>Trefferwürfel:</b> {klasseWählen[0].trefferpunkte.trefferwürfel}
        </p>
        <p>
          <b>Trefferpunkte auf Stufe 1:</b>{" "}
          {klasseWählen[0].trefferpunkte["trefferpunkte auf Stufe 1"]}
        </p>
        <p>
          <b>Trefferpunkte auf höheren Stufen:</b>{" "}
          {klasseWählen[0].trefferpunkte["trefferpunkte auf höheren Stufen"]}
        </p>
      </div>
      <div className={style.fertigkeiten}>
        <h3>Fähigkeiten</h3>
      <p><b>Rüstung:</b> {klasseWählen[0].fertigkeiten.rüstung}</p>
      </div>
    </>
  );
};

export default Barbar;
