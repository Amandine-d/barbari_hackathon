import axios from "axios";
import React from "react";
import { useParams } from "react-router";
// import Similar from './Similar';
import styleInfos from "./stylesInfos";

function MusicDetails() {
  const params = useParams();
  const getInfos = () => {
        axios.get(`https://tastedive.com/api/similar?q=${params.id}`)
      }
  

  console.log(getInfos)
  return (
    <div>
      <p>This is MusicDetails</p>
      <h5>Similar artists: </h5>
      {styleInfos.map((style) => (
        (style.id == params.id) ? (
          <div>
          <h2>{style.artist}</h2>
          <h2>You might like: 
            {/* <Similar nameArtist={style.artist} /> */}
          </h2>
          </div>
        
        )
        : null
          ))
        }
      </div>
      )
}

export default MusicDetails;
