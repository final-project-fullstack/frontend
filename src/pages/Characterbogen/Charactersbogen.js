import style from "./characterbogen.module.css";

const CharSheet = () => {
  return (
    <div class={style.sheetcontainerP1}>
      <div class={style.kopfzeile}>
        <div class={style.charName}>Character Name</div>
        <div class={style.charInfo}>
          <p class={style.pInfo}>
            <div class={style.infoSubcontainer}>Klasse & Stufe</div>
            <div class={style.infoSubcontainer}>Volk</div>
          </p>
          <p class={style.pInfo}>
            <div class={style.infoSubcontainer}>Hintergrund</div>
            <div class={style.infoSubcontainer}>Gesinnung</div>
          </p>
          <p class={style.pInfo}>
            <div class={style.infoSubcontainer}>Name des Spielers</div>
            <div class={style.infoSubcontainer}>Erfahrungspunkte</div>
          </p>
        </div>
      </div>
      {/* ANCHOR Attribute */}
      <div class={style.attribute}>
        <div class={`${style.stärke} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>Stärke</div>
          <div class={style.attributeWert}>8</div>
          <div class={style.attributeBoni}>0</div>
        </div>
        <div class={`${style.geschick} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>
            Geschick-
            <br />
            lichkeit
          </div>
          <div class={style.attributeWert}>12</div>
          <div class={style.attributeBoni}>+2</div>
        </div>
        <div class={`${style.konst} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>Konstitution</div>
          <div class={style.attributeWert}>wert</div>
          <div class={style.attributeBoni}>boni</div>
        </div>
        <div class={`${style.intel} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>Intelligenz</div>
          <div class={style.attributeWert}>wert</div>
          <div class={style.attributeBoni}>boni</div>
        </div>
        <div class={`${style.weisheit} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>Weisheit</div>
          <div class={style.attributeWert}>wert</div>
          <div class={style.attributeBoni}>boni</div>
        </div>
        <div class={`${style.charisma} ${style.attributeBorder}`}>
          <div class={style.attributeBezeichnung}>Charisma</div>
          <div class={style.attributeWert}>wert</div>
          <div class={style.attributeBoni}>boni</div>
        </div>
      </div>
      <div class={style.inspirationUndÜbung}>
        <div class={`${style.inspiration}`}>
          <div class={style.übungswert}>Wert</div>
          <div class={style.inspirationBezeichnung}>Inspiration</div>
        </div>
        <div class={`${style.übungsbonus}`}>
          <div class={style.übungswert}>Wert</div>
          <div>Übungsbonus</div>
        </div>
      </div>
      <div class={style.div4}>4 </div>
      <div class={style.div5}>5 </div>

      {/*  */}

      {/* ANCHOR Rettungswürfe */}
      <div class={style.rettungswürfeContainer}>
        <div class={style.rettungswurf2}>Rettungswürfe</div>
        <br />
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkstaerke"
            value="true"
            id="checkstaerke"
          ></input>
          <div>input</div>
          <label for="checkstaerke">stärke</label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkcharisma"
            value="true"
            id="checkcharisma"
          ></input>
          <div>input</div>
          <label for="checkcharisma">Charisma</label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkkonstitution"
            value="true"
            id="checkkonstitution"
          ></input>
          <div>input</div>
          <label for="checkkonstitution">Konstitution</label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkintelligenz"
            value="true"
            id="checkintelligenz"
          ></input>
          <div>input</div>
          <label for="checkintelligenz">Intelligenz</label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkweisheit"
            value="true"
            id="checkweisheit"
          ></input>
          <div>input</div>
          <label for="checkweisheit">Weisheit</label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            type="checkbox"
            name="checkcharisma"
            value="true"
            id="checkcharisma"
          ></input>
          <div>input</div>
          <label for="checkcharisma">Charisma</label>
        </div>
      </div>
      {/* ________________________________________ */}
      <div class={style.div7}>7</div>
      <div class={style.div8}>8</div>
      <div class={style.div9}>9</div>
      <div class={style.div10}>10 </div>
      <div class={style.div11}>11</div>
    </div>
  );
};

export default CharSheet;
