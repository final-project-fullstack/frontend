import "./App.css";
// import klassen from "./klassen.json";
// import rassen from "./rassen.json";
// import hintergrund from "./hintergrund.json";
// import gesinnungen from "./gesinnung.json";

function App() {
  return (
    <>
      {/* {rassen.map((rasse) => {
        return (
          <div>
            <h2>{rasse.name}</h2>
            {rasse.text.map((info) => {
              return <p dangerouslySetInnerHTML={{ __html: info }}></p>;
            })}
          </div>
        );
      })} */}

      {/* {gesinnungen.map((gesinnung) => {
        return (
          <div>
            <h2>{gesinnung.name}</h2>
            {gesinnung.Beschreibung.map((info) => {
              return <p dangerouslySetInnerHTML={{ __html: info }}></p>;
            })}
          </div>
        );
      })} */}
    </>
  );
}

export default App;
