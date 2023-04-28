import style from "./characterbogen.module.css";

const CharSheet = () => {
  return (
    <div class={style.sheetcontainerP1}>
      <div class={style.kopfzeile}>
        {/* <div class={style.charName}>Character Name</div> */}
        <div class={style.nameContainer}>
          <textarea rows="2" name="charName" id="charName"></textarea>
          <label for="charName" class={style.labelName}>
            Character Name
          </label>
        </div>
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

      {/* ANCHOR Inspiration & Übung */}
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

      {/*  */}
      <div class={style.div4}>4 </div>
      <div class={style.div5}>5 </div>

      {/*  */}

      {/* ANCHOR Rettungswürfe */}
      <div class={style.rettungswürfeContainer}>
        <div class={style.rettungswurf2}>Rettungswürfe</div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkstaerke"
            value="true"
            id="checkstaerke"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkstaerke">
            stärke
          </label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkcharisma"
            value="true"
            id="checkcharisma"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkcharisma">
            Charisma
          </label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkkonstitution"
            value="true"
            id="checkkonstitution"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkkonstitution">
            Konstitution
          </label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkintelligenz"
            value="true"
            id="checkintelligenz"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkintelligenz">
            Intelligenz
          </label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkweisheit"
            value="true"
            id="checkweisheit"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkweisheit">
            Weisheit
          </label>
        </div>
        {/*  */}
        <div class={style.rettungswurf}>
          <input
            class={style.input}
            type="checkbox"
            name="checkcharisma"
            value="true"
            id="checkcharisma"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkcharisma">
            Charisma
          </label>
        </div>
      </div>

      {/* ANCHOR Fertigkeiten*/}

      <div class={style.fertigkeitenContainer}>
        Fertigkeiten
        {/* ------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkAkrobatik"
            value="true"
            id="checkAkrobatik"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkAkrobatik">
            Akrobatik (Ges)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkArkaneKunde"
            value="true"
            id="checkArkaneKunde"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkArkaneKunde">
            Arkane Kunde (Int)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkAthletik"
            value="true"
            id="checkAthletik"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkAthletik">
            Athletik (Sta)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkAuftreten"
            value="true"
            id="checkAuftreten"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkAuftreten">
            Auftreten (Cha)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkEinschuechtern"
            value="true"
            id="checkEinschuechtern"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkEinschuechtern">
            Einschuechtern (Cha)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkFingerfertigkeit"
            value="true"
            id="checkFingerfertigkeit"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkFingerfertigkeit">
            Fingerfertigkeit (Ges)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkGeschichte"
            value="true"
            id="checkGeschichte"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkGeschichte">
            Geschichte (Int)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkHeilkunde"
            value="true"
            id="checkHeilkunde"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkHeilkunde">
            Heilkunde (Wei){" "}
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkHeimlichkeit"
            value="true"
            id="checkHeimlichkeit"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkHeimlichkeit">
            Heimlichkeit (Ges)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkTierUmgang"
            value="true"
            id="checkTierUmgang"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkTierUmgang">
            Mit Tieren umgehen (Wei)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkTierUmgang"
            value="true"
            id="checkTierUmgang"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkTierUmgang">
            Mit Tieren umgehen (Wei)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkMotiv"
            value="true"
            id="checkMotiv"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkMotiv">
            Motiv erkennen (Wei)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkNachforschungen"
            value="true"
            id="checkNachforschungen"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkNachforschungen">
            Nachforschungen (Int)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkNaturkunde  "
            value="true"
            id="checkNaturkunde"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkNaturkunde">
            Naturkunde (Int)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkReligion"
            value="true"
            id="checkReligion"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkReligion">
            Religion (Int)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkTauschen"
            value="true"
            id="checkTauschen"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkTauschen">
            Tauschen (Cha)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkUeberlebenskunst"
            value="true"
            id="checkUeberlebenskunst"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkUeberlebenskunst">
            Überlebenskunst (Wei)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkUeberzeugen"
            value="true"
            id="checkUeberzeugen"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkUeberzeugen">
            Überzeugen (Cha)
          </label>
        </div>
        {/* ------------------ */}
        <div class={style.fertigkeit}>
          <input
            class={style.input}
            type="checkbox"
            name="checkWahrnehmung"
            value="true"
            id="checkWahrnehmung"
          ></input>
          <div>input</div>
          <label class={style.label} for="checkWahrnehmung">
            Wahrnehmung (Wei)
          </label>
        </div>
        {/* ------------------ */}
      </div>

      {/* ----------------------------------- */}
      <div class={style.div8}>8</div>
      <div class={style.passivWei}>
        <div>inputfeld</div>

        <div>
          PASSIVE WEISHEIT (Wahrnehmung)
          <br />
          [10+ Wahrnehmung]9
        </div>
      </div>
      <div class={style.uebungUndSprachen}>
        <div class={style.ruestungUndWaffenContainer}></div>
        <div class={style.sprachenContainer}></div>
        <div class={style.werkzeugeContainer}></div>
      </div>
      <div class={style.div11}>11</div>
    </div>
  );
};

export default CharSheet;
