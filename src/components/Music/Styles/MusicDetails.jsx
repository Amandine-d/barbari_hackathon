import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styleInfos from "../stylesInfos";

function MusicDetails({ music }) {
  const params = useParams();
  const getInfos = () => {
        axios.get(`https://tastedive.com/api/similar?q=${params.id}`)
      }



  console.log(music)
  console.log(params.id);
  // const [similar, setSimilar] = useState("");

  // console.log(window.location.pathname);

  // console.log(styleInfos);
  // useEffect(() => {
  //   axios.get(`https://tastedive.com/api/similar?q=${styleInfos.artist}`)
  //   .then((data) => {
  //     setSimilar(data);
  //   })
  // }, []);
  // console.log(styleInfos.artist)

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
