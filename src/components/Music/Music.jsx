import React, { useState } from "react";
import Style from "./Style";
import styleInfos from "./stylesInfos";
import './Music.css';

function Music() {

  return (
    <div className="container__music">
      <p>This is Music</p>
      <div className="container__contain">
      {styleInfos.map((music) => {
        return <Style {...music} key={music.id} />;
      })}
      </div>
    </div>
  );
}

export default Music;
