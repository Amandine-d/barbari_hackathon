import React from "react";
import { useNavigate } from "react-router";
import './Music.css';

function Style({ id, style, name, video }) {
  let navigate = useNavigate();
  const handleStyle = () => {
    console.log(name);
    navigate(`/music/${id}`);
  };

  return (
    <div className="container">
      <div className='container__style'>
      <h2>{style}</h2>
      <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video__style"></iframe>
  
      </div>
      <button onClick={handleStyle} className='btn__music'>More</button>
    </div>
  );
}

export default Style;
