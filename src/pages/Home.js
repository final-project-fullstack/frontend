
import { useStore } from "../context/storeContext";
import { NavLink } from "react-router-dom";


const Home = () => {
  const { isLoggedIn } = useStore()
  return (
    <div className="home">
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
      {!isLoggedIn && (
        <>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/register">
            <button>Register</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Home;
