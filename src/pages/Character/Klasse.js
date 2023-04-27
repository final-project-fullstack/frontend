import { useStore } from "../../context/storeContext.js";
import style from "./klasseWählen.module.css";
import characterKlassen from "./character-klassen.json"
import Barbar from "../../components/KlasseWählen/Barbar"

const Klasse = () => {
  const { klasseWählen, setKlasseWählen, } = useStore();
  const onChangeKlasse = (e) => {
    const value = e.target.value;
    const filteredKlasse = characterKlassen.filter((info) => {
      return info.name === value;
    });
    setKlasseWählen(filteredKlasse)
  };
  console.log(klasseWählen)
    return (
      <div className={style.container}>
      <form className={style.form}>
        <select onChange={onChangeKlasse}>
          <option>Klasse auswählen</option>
         {characterKlassen.map((klasse)=>{ 
          return <option key={klasse.name}>{klasse.name}</option>
          })}
        </select>
      </form>
     {klasseWählen.length>0 && (klasseWählen[0].name === "Barbar" && <Barbar/>)}

    </div>
  
    );
  };
  
  export default Klasse;