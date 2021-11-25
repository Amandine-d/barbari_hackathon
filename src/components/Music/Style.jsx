import React from "react";
import { useNavigate } from "react-router";

function Style ({ id, style, name }) {
  const navigate = useNavigate();
  const handleStyle = () => {
    console.log(name);
    navigate(`/music/${style}`);
  }
  return(

        <div className='container'>
        <h1>{style}</h1>
        <p>{id}</p>
        <button onClick={handleStyle}>More</button>

      </div>

  )
}

export default Style;