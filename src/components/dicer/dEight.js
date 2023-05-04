import { useEffect, useState } from "react";
import w8 from "./svg/w8.webp"
import style from "./DicerStyle.module.css";
const DicerPoolDEight = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD8");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
      }
    };
    storedItems();
  }, []);

  const addDEight = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 8 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD8", JSON.stringify(newItems));
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("dicerItemsD8");
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W4
        </button>
        <button className={style.addButton} onClick={addDEight}>
          <img className={style.icon} src={w8 } alt="icon"/> 
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

export default DicerPoolDEight;
