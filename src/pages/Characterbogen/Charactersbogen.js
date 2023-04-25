import style from "./characterbogen.module.css";

const CharSheet = () => {
  return (
    <div className={style.sheetContainer}>
      {/* ANCHOR Kopfzeile */}
      <div className={style.charHeader}>
        <div className={style.charName}>input Name</div>
        <div className={style.charInfo}>
          input klassen input erfahrungspunkte input stufe input hintergrund
          input volk input gesinnung
        </div>
      </div>

      {/* ANCHOR Attribute  */}
      <div className={style.attributes}>
        <div className={style.attributwert}>
          <div className="inputAttributes">label stärke</div>
          <div className={style.attributwerteboni}></div>
        </div>
        <div className={style.attributwert}>
          <div className="inputAttributes">label geschicklichkeit</div>
          <div className={style.attributwerteboni}></div>
        </div>
        <div className={style.attributwert}>
          <div className="inputAttributes">label konstitution</div>
          <div className={style.attributwerteboni}></div>
        </div>
        <div className={style.attributwert}>
          <div className="inputAttributes">label Intelligenz</div>
          <div className={style.attributwerteboni}></div>
        </div>
        <div className={style.attributwert}>
          <div className="inputAttributes">label Weisheit</div>
          <div className={style.attributwerteboni}></div>
        </div>
        <div className={style.attributwert}>
          <div className="inputAttributes">label Charisma</div>
          <div className={style.attributwerteboni}></div>
        </div>
      </div>

      {/* ---------------- */}
      <div className={style.test}></div>
    </div>
  );
};

export default CharSheet;
