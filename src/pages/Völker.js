import React, { useContext } from "react";
import userContext from "../context/userContext";

export default function Völker() {
  const { volk } = useContext(userContext);
  console.log(volk);

  return (
    <div className="völker">
      {volk.map((info) => {
        return (
          <div key={info._id} className="volk">
            <h3>{info.name}</h3>
            {info.text.map((text, i) => (
              <p dangerouslySetInnerHTML={{ __html: text }} key={i}></p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
