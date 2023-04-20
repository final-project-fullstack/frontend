import React, { useState } from "react";
import style from "./DicerStyle.module.css";
import DicerPoolDThree from "./dThree";
import DicerPoolDSix from "./dSix";
import DicerPoolDEight from "./dEight";
import DicerPoolDTen from "./dTen";
import DicerPoolDTwelve from "./dTwelve";
import DicerPoolDTwenty from "./dTwenty";
import DicerPoolDHundred from "./dHundred";

const PoolContainer = () => {
  return (
    <div>
      <div className={style.poolCardVisible}>
        <DicerPoolDThree />
        <DicerPoolDSix />
        <DicerPoolDEight />
        <DicerPoolDTen />
        <DicerPoolDTwelve />
        <DicerPoolDTwenty />
        <DicerPoolDHundred />
      </div>
    </div>
  );
};

export default PoolContainer;
