import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";
import w4 from "./svg/w4.webp";

const DicerPoolDFour = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD4");
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

  const addDThree = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 4 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD4", JSON.stringify(newItems));
    const sum = newItems.reduce((acc, curr) => acc + curr.number, 0);
    setItems(newItems);
    setTotal(sum);
  };

  const clearItems = () => {
    setItems([]);
    setTotal(0);
    localStorage.removeItem("dicerItemsD4");
  };

  // dicerItemsD3
  return (
    <>
      <div className={style.dicer}>
        <button className={style.removeButton} onClick={clearItems}>
          Remove <br />
          W4
        </button>
        <button className={style.addButton} onClick={addDThree}>
          <img className={style.icon} src={w4} alt="icon" />
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

export default DicerPoolDFour;
