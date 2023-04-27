import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDHundred = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(`dicerItemsD100`);
    console.log(storedItems);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`dicerItemsD100`, JSON.stringify(items));
  }, [items]);

  const addDHundred = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 100 + 1) },
    ]);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(`dicerItemsD100`);
  };

  return (
    <>
      <div className={`${style.dicer}`}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W100
        </button>
        <button className={style.addButton} onClick={addDHundred}>
          <div className={style.buttonTxt}>
            +<br /> W100
          </div>
        </button>
        <div className={style.wuerfelBackground}>
          {items.map((item) => {
            return (
              <div className={style.cube} key={item.id}>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DicerPoolDHundred;
