import React, { useState } from "react";
import Style from "./Style";
import styleInfos from "./stylesInfos";

function Music() {
  const [style, setStyle] = useState(false);
  const handleStyle = () => {setStyle(!style)};

  return (
    <div>
      <p>This is Music</p>
      <button onClick={handleStyle} type="button">
        style
      </button>
      {styleInfos.map((music) => {
        return <Style {...music} key={music.id} />;
      })}
    </div>
  );
}

export default Music;
