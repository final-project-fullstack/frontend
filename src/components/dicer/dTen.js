import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";
import w10 from "./svg/w10.webp";
import trash from "./svg/trashCanIcon.png";

const DicerPoolDTen = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD10");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
        const sum = parsed.reduce((acc, curr) => acc + curr.number, 0);
        setTotal(sum);
      }
    };
    storedItems();
  }, []);

  const addDTen = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 10 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD10", JSON.stringify(newItems));
    const sum = newItems.reduce((acc, curr) => acc + curr.number, 0);
    setItems(newItems);
    setTotal(sum);
  };

  const clearItems = () => {
    setItems([]);
    setTotal(0);
    localStorage.removeItem("dicerItemsD10");
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          <div className={style.removeTxt}>
            Remove <br />
            W10
          </div>
          <img
            className={`${style.icon} ${style.trashIcon}`}
            src={trash}
            alt="icon"
          />
        </button>
        <button className={style.addButton} onClick={addDTen}>
          <img className={style.icon} src={w10} alt="icon" />
          <div className={style.sum}>Total: {total}</div>
        </button>
        <div className={style.wuerfelBackground}>
          {items.map((item) => {
            return (
              <div className={style.cube} key={item.id}>
                <div className={style.front}>
                  <div className={style.a}>{item.number}</div>
                </div>
                <div className={style.top}>
                  <div className={style.a}>{item.number}</div>
                </div>
                <div className={style.left}>
                  <div className={style.a}>{item.number}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DicerPoolDTen;
