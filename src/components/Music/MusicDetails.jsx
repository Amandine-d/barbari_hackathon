import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import styleInfos from "./stylesInfos";

function MusicDetails({ music }) {
  const params = useParams();
  const getInfos = () => {
        axios.get(`https://tastedive.com/api/similar?q=${params.id}`)
      }

  console.log(music)
  console.log(params.id);

  return (
    <div>
      <p>This is MusicDetails</p>
      <h5>Similar artists: </h5>
      {styleInfos.map((style) => (
        (style.id == params.id) ? (
          <h2>{style.artist}</h2>
        )
        : null
          ))
        }
      </div>
      )
}

export default MusicDetails;
