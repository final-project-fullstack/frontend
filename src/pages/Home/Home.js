import style from "../Home/home.module.css"
import { useStore } from '../../context/storeContext.js'
import { NavLink } from "react-router-dom";

// REVIEW wird nur gebraucht wenn die Buttons eingefügt bleiben sollen
// import { NavLink } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useStore()
  return (
    <div className={style.home}>
      <h1>Wilkommen bei Dungons & Dragons - Wiki & Guide</h1>
      <p>
        Auf dieser Webseite findest du alles was du für deine erste
        Charaktererstellung brauchst. Des weiteren bieten wir ein Wiki mit
        Rassen, Klassen, Zauber und vieles mehr. Die Seite richtet sich vorallem
        an Anfänger, um einen leichten Einstieg zu ermöglichen. Mit einfachen
        klicks erstellst du deinen individuellen Charakter und speicherst ihn in
        deinem Account. Und solltest du mal keine passenden Würfel zur Hand
        haben, klick einfach auf das obige Logo.
      </p>

      {/* REVIEW Login & Register Button auskommentiert da im header schon vorhanden  */}
      {/* {!isLoggedIn && (
        <>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/register">
            <button>Register</button>
          </NavLink>
        </>
      )} */}
    </div>
  );
};

export default Home;
