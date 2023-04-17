import { useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolWTwenty = () => {
  const [items, setItems] = useState([]);

  const addWTwenty = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 20 + 1) },
    ]);
  };

  return (
    <div>
      <button className={style.button2} onClick={() => setItems([])}>
        Remove
      </button>

      <button className={style.button} onClick={addWTwenty}>
        Add <br />
        W20
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

export default DicerPoolWTwenty;