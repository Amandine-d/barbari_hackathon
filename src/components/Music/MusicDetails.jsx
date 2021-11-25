import axios from "axios";
import React from "react";
import { useParams } from "react-router";
// import Similar from './Similar';
import styleInfos from "./stylesInfos";
import './Music.css';

function MusicDetails() {
  const params = useParams();
  const getInfos = () => {
    axios.get(`https://tastedive.com/api/similar?q=${params.id}`);
  };

  console.log(getInfos);
  return (
    <div className="container__details">
      <div className="music__details">
        <h5>Similar artists: </h5>
        {styleInfos.map((style) =>
          style.id == params.id ? (
            <div>
              <h1>{style.style}</h1>
              <h2>{style.artist}</h2>
              <h2>{style.description}</h2>
              <img src={style.image} alt={style.name} />
              <h2>
                You might like:
                {/* <Similar nameArtist={style.artist} /> */}
              </h2>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default MusicDetails;
