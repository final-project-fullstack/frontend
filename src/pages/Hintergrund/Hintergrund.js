import { useStore } from "../../context/storeContext.js";
import style from "./hintergrund.module.css";

export default function Hintergrund() {
  const { hintergrund, filterHintergrund, setFiltrHintergrund } = useStore();
  console.log(hintergrund);

  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  const onChangeHintergrund = (e) => {
    const value = e.target.value;
    const hintergrundFilter = hintergrund.filter((info) => {
      return info.name === value;
    });
    setFiltrHintergrund(hintergrundFilter);
  };
  console.log(filterHintergrund);
  return (
    <div className="container">
      {hintergrund.length > 0 && (
        <div className="selectContainer">
          <div className="select">
            <label>Hintergrund auswählen:</label>
            <select onChange={onChangeHintergrund}>
              <option>Hintergrund auswählen</option>
              {hintergrund
                .filter((info) => {
                  return info.name !== "Hintergrund";
                })
                .sort(sortArray)
                .map((info) => {
                  return <option key={info.name}>{info.name}</option>;
                })}
            </select>
          </div>
        </div>
      )}
      {filterHintergrund.length > 0 ? (
        <>
          {filterHintergrund.map((hintergrund, i) => {
            return (
              <div className="hintergrund" key={i}>
                <h3 key={i}>{hintergrund.name}</h3>
                {hintergrund.text.map((info, i) => {
                  return (
                    <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                  );
                })}
              </div>
            );
          })}
        </>
      ) : (
        <div>
          {hintergrund.length > 0 && (
            <div className="hintergrund">
              <h3>{hintergrund[3].name}</h3>
              {hintergrund[3].text.map((info, i) => (
                <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
