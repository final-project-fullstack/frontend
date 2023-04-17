import { useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDTen = () => {
  const [items, setItems] = useState([]);

  const addDTen = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 10 + 1) },
    ]);
  };

  return (
    <div>
      <button className={style.button2} onClick={() => setItems([])}>
        Remove
      </button>
      <button className={style.button} onClick={addDTen}>
        + <br /> W10
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div className={style.cube}>
                <div className={style.front}>
                  <a className={style.img}></a>
                </div>
                <div className={style.top}>
                  <a className={style.a}>{item.number}</a>
                </div>
                <div className={style.left}>
                  <a className={style.img}></a>
                </div>
              </div>
            </div>
          );
        })}
      </button>
    </div>
  );
};

export default DicerPoolDTen;