import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDFour = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD4");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
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
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
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
          <div className={style.buttonTxt}>
            +<br /> W4
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

export default DicerPoolDFour;