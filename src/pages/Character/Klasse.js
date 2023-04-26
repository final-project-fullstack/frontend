import { useStore } from "../../context/storeContext.js";
import style from "./character.module.css";

const Klasse = () => {
  const { klassen } = useStore();
    return (
      <div>
      <form className={style.form}>
        <select>
          <option>Klasse auswählen</option>
         {klassen.map((klasse)=>{ 
          return <option key={klasse.name}>{klasse.name}</option>
          })}
        </select>
      </form>

    </div>
  
    );
  };
  
  export default Klasse;