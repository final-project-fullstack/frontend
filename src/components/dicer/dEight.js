import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDEight = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(`dicerItemsD8`);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`dicerItemsD8`, JSON.stringify(items));
  }, [items]);

  const addDEight = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 8 + 1) },
    ]);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(`dicerItemsD8`);
  };

  return (
    <div>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove
          <br /> W8
        </button>
        <button className={style.addButton} onClick={addDEight}>
          <div className={style.buttonTxt}>
            + <br /> W8
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
                    <a className={style.a}>{item.number}</a>
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

export default DicerPoolDEight;
