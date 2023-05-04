import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";
import w20 from "./svg/w20.webp"

const DicerPoolDTwenty = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD20");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
      }
    };
    storedItems();
  }, []);

  const addDTwenty = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 20 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD20", JSON.stringify(newItems));
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(`dicerItemsD20`);
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W20
        </button>
        <button className={style.addButton} onClick={addDTwenty}>
        <img className={style.icon} src={w20} alt="icon"/>
        </button>
        <div className={style.wuerfelBackground}>
          {items.map((item) => {
            return (
              <div className={style.cube} key={item.id}>
                <div className={style.front}>
                  <a className={style.a} href>{item.number}</a>
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

export default DicerPoolDTwenty;
