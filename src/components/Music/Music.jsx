import React from "react";
import Style from "./Style";
import styleInfos from "./stylesInfos";
import "./Music.css";

function Music() {
  return (
    <div className="container__music">
      <h1 className="h1__container__music">Today's choice</h1>
      <div className="container__contain">
        {styleInfos.map((music) => {
          return <Style {...music} key={music.id} />;
        })}
      </div>
    </div>
  );
}

export default Music;
