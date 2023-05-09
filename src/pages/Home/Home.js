import style from "../Home/home.module.css";

const Home = () => {
  return (
    <div className="cardInfo">
      <h1>Wilkommen bei Dungons & Dragons - Wiki & Guide</h1>
      <p className={style.p}>
        Auf dieser Webseite findest du alles was du für deine erste
        Charaktererstellung brauchst. Des weiteren bieten wir ein Wiki mit
        Rassen, Klassen, Zauber und vieles mehr. Die Seite richtet sich vorallem
        an Anfänger, um einen leichten Einstieg zu ermöglichen. Mit einfachen
        Klicks kannst du deine individuell ausgewählten Informationen speichern
        und später in deinem Profil abrufen. Und solltest du mal keine passenden
        Würfel zur Hand haben, klick einfach auf das Logo oben rechts.
      </p>
    </div>
  );
};

export default Home;
