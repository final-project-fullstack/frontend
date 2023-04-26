import { useState } from "react";
import { useStore } from "../../context/storeContext.js";
import style from "./character.module.css";

const Volk = () => {
  const { characterVolk } = useStore();
  const [filterVolk, setFilterVolk] = useState([]);
  const [filterVolksart, setFilterVolksart] = useState([]);

  const onChangeVolk = (event) => {
    const value = event.target.value;
    const volkFilter = characterVolk.filter((info) => {
      return info.name === value;
    });
    setFilterVolk(volkFilter);
    console.log(volkFilter);
  };

  const onChangeVolksart = (event) => {
    const value = event.target.value;
    const volksartFilter = filterVolk[0].volksarten.filter((info) => {
      return info.name === value;
    });
    setFilterVolksart(volksartFilter);
    console.log(volksartFilter);
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <select onChange={onChangeVolk}>
          <option>Volk auswählen</option>
          {characterVolk.map((volk, i) => (
            <option key={i}>{volk.name}</option>
          ))}
        </select>
      </form>
      <div>
        {filterVolk.length > 0 && (
          <>
            <div className={style.volkInfo}>
              {filterVolk[0].text.map((info, i) => {
                return (
                  <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                );
              })}
            </div>
            <form className={style.form}>
              <select onChange={onChangeVolksart}>
                <option>Volksarten</option>
                {filterVolk[0].volksarten.map((name, i) => {
                  return <option key={i}>{name.name}</option>;
                })}
              </select>
            </form>
          </>
        )}
      </div>
      {filterVolksart.length > 0 && (
        <div className={style.volkInfo}>
          {filterVolksart[0].text.map((info, i) => {
            return <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Volk;
