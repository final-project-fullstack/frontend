import { useState, useEffect } from "react";
import style from "./DicerStyle.module.css";
import w6 from "./svg/w6.webp"

const DicerPoolDSix = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD6");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
      }
    };
    storedItems();
  }, []);

  const addDSix = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 6 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD6", JSON.stringify(newItems));
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("dicerItemsD6");
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W6
        </button>
        <button className={style.addButton} onClick={addDSix}>
        <img className={style.icon} src={w6} alt="icon"/>
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

export default DicerPoolDSix;
