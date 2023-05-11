import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../context/storeContext.js";
import { faviriteStatus, filterDurchParamsName } from "../../helper/FaviriteStatus";
import { useEffect } from "react";

export default function Hintergrund() {
  const { hintergrund, filterHintergrund, setFiltrHintergrund, user, setUser } =
    useStore();
  const {id} = useParams()
const navigate = useNavigate()
  function sortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  useEffect(()=>{
    if (id){filterDurchParamsName(hintergrund, setFiltrHintergrund, id)}
   },[hintergrund])
  
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

  const faviriteStatus2 = (id, status) => {
    const sdataUpdate = faviriteStatus(id, status)
      .then((response) => setUser(response.data.userWithoutPassword))
      .catch((err) => console.log(err));
  };

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

                  <h3 key={i}>{hintergrund.name}</h3>
                  {hintergrund.text.map((info, i) => {
                    return (
                      <p dangerouslySetInnerHTML={{ __html: info }} key={i}></p>
                    );
                  })}
                  {user.data.includes(hintergrund._id) ? (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(hintergrund._id, true)}
                    >
                      <i
                        class="fa-solid fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  ) : (
                    <div
                      className={"bookmark"}
                      onClick={() => faviriteStatus2(hintergrund._id, false)}
                    >
                      <i
                        class="fa-regular fa-bookmark "
                        style={{ color: "#30475E" }}
                      ></i>
                    </div>
                  )}
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
