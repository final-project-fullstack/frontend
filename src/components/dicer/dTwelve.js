import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDTwelve = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(`dicerItemsD12`);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`dicerItemsD12`, JSON.stringify(items));
  }, [items]);

  const addDTwelve = () => {
    setItems((cur) => [
      ...cur,
      { id: cur.length, number: Math.floor(Math.random() * 12 + 1) },
    ]);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(`dicerItemsD12`);
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W12
        </button>
        <button className={style.addButton} onClick={addDTwelve}>
          <div className={style.buttonTxt}>
            +<br /> W12
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

export default DicerPoolDTwelve;
