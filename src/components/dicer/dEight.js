import { useEffect, useState } from "react";
import w8 from "./svg/w8.webp";
import style from "./DicerStyle.module.css";

const DicerPoolDEight = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD8");
      if (data === null || !data) {
        setItems((prev) => []);
        setTotal(0);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
        const sum = parsed.reduce((acc, curr) => acc + curr.number, 0);
        setTotal(sum);
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
    const sum = newItems.reduce((acc, curr) => acc + curr.number, 0);
    setItems(newItems);
    setTotal(sum);
  };

  const clearItems = () => {
    setItems([]);
    setTotal(0);
    localStorage.removeItem("dicerItemsD8");
  };

  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W8
        </button>
        <button className={style.addButton} onClick={addDEight}>
          <img className={style.icon} src={w8} alt="icon" />
          <div className={style.sum}>Total: {total}</div>
        </button>
        <div className={style.wuerfelBackground}>
          <div></div>
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

export default DicerPoolDEight;
