import style from "./characterbogen.module.css";

const CharSheet = () => {
  return (
    <div className={style.sheetcontainerP1}>
      <div className={style.kopfzeile}>
        {/* <div className={style.charName}>Character Name</div> */}
        <div className={style.nameContainer}>
          <textarea rows="2" name="charName" id="charName"></textarea>
          <label for="charName" className={style.labelName}>
            Character Name
          </label>
        </div>
        <div className={style.charInfo}>
          <p className={style.pInfo}>
            <div className={style.infoSubcontainer}>Klasse & Stufe</div>
            <div className={style.infoSubcontainer}>Volk</div>
          </p>
          <p className={style.pInfo}>
            <div className={style.infoSubcontainer}>Hintergrund</div>
            <div className={style.infoSubcontainer}>Gesinnung</div>
          </p>
          <p className={style.pInfo}>
            <div className={style.infoSubcontainer}>Name des Spielers</div>
            <div className={style.infoSubcontainer}>Erfahrungspunkte</div>
          </p>
        </div>
      </div>
      {/* ANCHOR Attribute */}
      <div className={style.attribute}>
        <div className={`${style.stärke} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>Stärke</div>
          <div className={style.attributeWert}>8</div>
          <div className={style.attributeBoni}>0</div>
        </div>
        <div className={`${style.geschick} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>
            Geschick-
            <br />
            lichkeit
          </div>
          <div className={style.attributeWert}>12</div>
          <div className={style.attributeBoni}>+2</div>
        </div>
        <div className={`${style.konst} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>Konstitution</div>
          <div className={style.attributeWert}>wert</div>
          <div className={style.attributeBoni}>boni</div>
        </div>
        <div className={`${style.intel} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>Intelligenz</div>
          <div className={style.attributeWert}>wert</div>
          <div className={style.attributeBoni}>boni</div>
        </div>
        <div className={`${style.weisheit} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>Weisheit</div>
          <div className={style.attributeWert}>wert</div>
          <div className={style.attributeBoni}>boni</div>
        </div>
        <div className={`${style.charisma} ${style.attributeBorder}`}>
          <div className={style.attributeBezeichnung}>Charisma</div>
          <div className={style.attributeWert}>wert</div>
          <div className={style.attributeBoni}>boni</div>
        </div>
      </div>

      {/* ANCHOR Inspiration & Übung */}
      <div className={style.inspirationUndÜbung}>
        <div className={`${style.inspiration}`}>
          <div className={style.übungswert}>Wert</div>
          <div className={style.inspirationBezeichnung}>Inspiration</div>
        </div>
        <div className={`${style.übungsbonus}`}>
          <div className={style.übungswert}>Wert</div>
          <div>Übungsbonus</div>
        </div>
      </div>

      {/*  */}
      <div className={style.div4}>4 </div>
      <div className={style.div5}>
        Persönlichkeitsmerkmale, Ideale, Bindungen & Makel
      </div>

      {/*  */}

      {/* ANCHOR Rettungswürfe */}
      <div className={style.rettungswürfeContainer}>
        <div className={style.rettungswurf2}>Rettungswürfe</div>
        {/*  */}
        <div className={style.rettungswurf}>
          <input
            className={style.input}
            type="checkbox"
            name="checkstaerke"
            value="true"
            id="checkstaerke"
          ></input>
          <div>input</div>
          <label className={style.label} for="checkstaerke">
            stärke
          </label>
        </div>
        {/*  */}
        <div className={style.rettungswurf}>
          <input
            className={style.input}
            type="checkbox"
            name="checkcharisma"
            value="true"
            id="checkcharisma"
          ></input>
          <div>input</div>
          <label className={style.label} for="checkcharisma">
            Charisma
          </label>
        </div>
        {/*  */}
        <div className={style.rettungswurf}>
          <input
            className={style.input}
            type="checkbox"
            name="checkkonstitution"
            value="true"
            id="checkkonstitution"
          ></input>
          <div>input</div>
          <label className={style.label} for="checkkonstitution">
            Konstitution
          </label>
        </div>
        {/*  */}
        <div className={style.rettungswurf}>
          <input
            className={style.input}
            type="checkbox"
            name="checkintelligenz"
            value="true"
            id="checkintelligenz"
          ></input>
          <div>input</div>
          <label className={style.label} for="checkintelligenz">
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

      {/*  */}
      {/* ANCHOR passive Weisheit */}
      <div class={style.passivWei}>
        <div>inputfeld</div>

        <div>
          PASSIVE WEISHEIT (Wahrnehmung)
          <br />
          [10+ Wahrnehmung]9
        </div>
      </div>
      {/* ANCHOR Übung und Sprachen */}
      <div class={style.uebungUndSprachen}>
        {/*  */}
        {/* <div class={style.ruestungUndWaffenContainer}> */}
        {/* <br /> */}
        <div class={style.ruestungContainer}>
          Rüstung
          <div class={style.ruestung}>
            <input
              class={style.input}
              type="checkbox"
              name="leichteRuestung"
              value="true"
              id="leichteRuestung"
            ></input>
            <label class={style.label} for="leichteRuestung">
              Leichte
            </label>
          </div>
          <div class={style.ruestung}>
            <input
              class={style.input}
              type="checkbox"
              name="mittlereRuestung"
              value="true"
              id="mittlereRuestung"
            ></input>
            <label class={style.label} for="mittlereRuestung">
              Mittlere
            </label>
          </div>
          <div class={style.ruestung}>
            <input
              class={style.input}
              type="checkbox"
              name="schwereRuestung"
              value="true"
              id="schwereRuestung"
            ></input>

            <label class={style.label} for="schwereRuestung">
              Schwere
            </label>
          </div>
          <div class={style.ruestung}>
            <input
              class={style.input}
              type="checkbox"
              name="schilde"
              value="true"
              id="schilde"
            ></input>
            <label class={style.label} for="schilde">
              Schilde
            </label>
          </div>
        </div>
        <div class={style.waffenContainer}>
          Waffen
          <br />
          <input
            class={style.input}
            type="checkbox"
            name="einfacheWaffen"
            value="true"
            id="einfacheWaffen"
          ></input>
          <label class={style.label} for="einfacheWaffen">
            Einfache
          </label>
          <input
            class={style.input}
            type="checkbox"
            name="kriegswaffen"
            value="true"
            id="kriegswaffen"
          ></input>
          <label class={style.label} for="kriegswaffen">
            Kriegswaffen
          </label>
          <input
            class={style.input}
            type="checkbox"
            name="sonstigeWaffen"
            value="true"
            id="sonstigeWaffen"
          ></input>
          <label class={style.label} for="sonstigeWaffen">
            Sonstige Waffen
          </label>
        </div>
        <div class={style.inputfeldWaffenuebung}>
          <input class={style.input} type="text"></input>
        </div>
        {/*  */}
        {/*  */}
        <div class={style.werkzeugeUndSprachenContainer}>
          <div class={style.sprachen}>
            SPRACHEN <br />
            <input class={style.input} type="text"></input>
            <input class={style.input} type="text"></input>
            <input class={style.input} type="text"></input>
            <input class={style.input} type="text"></input>
            <input class={style.input} type="text"></input>
            <input class={style.input} type="text"></input>
          </div>
        </div>
        <div class={style.werkzeugeContainer}>
          WERKZEUGE & ANDERE <br />
          <input class={style.input} type="text"></input>
          <input class={style.input} type="text"></input>
          <input class={style.input} type="text"></input>
          <input class={style.input} type="text"></input>
          <input class={style.input} type="text"></input>
          <input class={style.input} type="text"></input>
        </div>
      </div>

      {/* ANCHOR Container 11  */}
      <div class={style.klassenmerkmale}>KLASSENMERKMALE</div>
    </div>
  );
};

export default CharSheet;
