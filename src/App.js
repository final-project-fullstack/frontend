import "./App.css";
// import klassen from "./klassen.json";
// import rassen from "./rassen.json";
import hintergrund from "./hintergrund.json";

function App() {
  return (
    <>
      <h2>{hintergrund[0].name}</h2>
      <div>
        {hintergrund[0].text.map((info) => {
          return <p dangerouslySetInnerHTML={{ __html: info }}></p>;
        })}
      </div>
    </>
  );
}

export default App;
