import { useState, useEffect } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDSix = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("dicerItemsD6");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dicerItemsD6", JSON.stringify(items));
  }, [items]);

  const addDSix = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 6 + 1) },
    ]);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("dicerItemsD6");
  };

  return (
    <div>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove
          <br /> W6
        </button>
        <button className={style.addButton} onClick={addDSix}>
          <div className={style.buttonTxt}>
            + <br /> W6
          </div>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <div className={style.cube}>
                  <div className={style.front}>
                    <a className={style.a}>{item.number}</a>
                  </div>
                  <div className={style.top}>
                    <a className={style.a}>{item.number}</a>
                  </div>
                  <div className={style.left}>
                    <a className={style.image}></a>
                  </div>
                </div>
              </div>
            );
          })}
        </button>
      </div>
    </div>
  );
};

export default DicerPoolDSix;
