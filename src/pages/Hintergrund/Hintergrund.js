import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../context/storeContext.js";

export default function Hintergrund() {
  const { hintergrund, filterHintergrund, setFiltrHintergrund } = useStore();
  const {id} = useParams()
const navigate = useNavigate()
  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  
  const onChangeHintergrund = (e) => {
    const value = e.target.value;
    navigate(`/hintergrund/${value}`)
    const hintergrundFilter = hintergrund.filter((info) => {
      return info.name === value;
    });
    setFiltrHintergrund(hintergrundFilter);
  };

  const hintergrundInfo = hintergrund.filter(
    (hintergrund) => hintergrund.name === "Hintergrund"
  );

  return (
    <>
      <div className="cards">
        {hintergrund.length > 0 && (
          <div className="selectContainer">
            <div className="select">
              <label>Hintergrund auswählen:</label>
              <select onChange={onChangeHintergrund}>
                <option value="">Hintergrund auswählen</option>
                {hintergrund
                  .filter((info) => {
                    return info.name !== "Hintergrund";
                  })
                  .sort(sortArray)
                  .map((info) => {
                    return <option value={info.name} selected={id=== info.name} key={info.name}>{info.name}</option>;
                  })}
              </select>
            </div>
          </div>
        )}
        {filterHintergrund.length > 0 ? (
          <>
            {filterHintergrund.map((hintergrund, i) => {
              return (
                <div className="cardInfo" key={i}>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <label>Speichern</label>
                  </div>
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
              <div className="cardInfo">
                <h3>{hintergrundInfo[0].name}</h3>
                {hintergrundInfo[0].text.map((info, i) => (
                  <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
