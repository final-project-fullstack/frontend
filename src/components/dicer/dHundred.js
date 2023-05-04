import { useEffect, useState } from "react";
import style from "./DicerStyle.module.css";

const DicerPoolDHundred = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = async () => {
      const data = localStorage.getItem("dicerItemsD100");
      if (data === null || !data) {
        setItems((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setItems((prev) => parsed);
      }
    };
    storedItems();
  }, []);

  const addDHundred = () => {
    const newItem = {
      id: items.length,
      number: Math.floor(Math.random() * 100 + 1),
    };
    const newItems = [...items, newItem];
    localStorage.setItem("dicerItemsD100", JSON.stringify(newItems));
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("dicerItemsD100");
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
                  <a href="#" className={style.a}>
                    {item.number}
                  </a>
                </div>
                <div className={style.top}>
                  <a href="#" className={style.a}>
                    {item.number}
                  </a>
                </div>
                <div className={style.left}>
                  <a href="#" className={style.a}>
                    {item.number}
                  </a>
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
