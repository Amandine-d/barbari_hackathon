import React, { useState } from "react";
import Style from './Style'
import styleInfos from "./stylesInfos";

function Music() {
  const [style, setStyle] = useState(false);
  const handleStyle = () => setStyle(!style)
  return(
    <div>
    <p>This is Music</p>
    <button onClick={handleStyle} type='button'>style</button>
    {styleInfos.map((music) => {
      return(
        <Style {...music} key={music.id} />
      )
    })}
  

    {/* <li><a href='http://localhost:3000/music/techno'>Techno</a></li>
    <li><a href='http://localhost:3000/music/triphop'>triphop</a></li>
    <li><a href='http://localhost:3000/music/classical'>classical</a></li>
    <li><a href='http://localhost:3000/music/eighties'>eighties</a></li>
    <li><a href='http://localhost:3000/music/electro'>electro</a></li> */}
    </div>
  )
}

export default Music;