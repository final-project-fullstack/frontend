import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";
import w20 from "./svg/w20.webp";

const DicerPoolDTwenty = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD20");
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

  const addDTwenty = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 20 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD20", JSON.stringify(newItems));
    const sum = newItems.reduce((acc, curr) => acc + curr.number, 0);
    setItems(newItems);
    setTotal(sum);
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
          <img className={style.icon} src={w20} alt="icon" />
        </button>
        <div className={style.sumContainer}>
          <div className={style.sum}>Total: {total}</div>
        </div>
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

export default DicerPoolDTwenty;
