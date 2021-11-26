import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import Similar from './Similar';
import styleInfos from "./stylesInfos";
import Quote from './Quote';
import "./Music.css";

function MusicDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const getInfos = () => {
    axios.get(`https://tastedive.com/api/similar?q=${params.id}`);
  };

  const sampleQuote= {
    author: "Mitch Ratcliffe",
    quote: "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.",
  }
  const [extract, setExtract] = useState(sampleQuote);

  return (
    <div className="container__details">
      <button onClick={handleBack} className="btn__music">
        Back
      </button>
      <div className="music__details">
        {styleInfos.map((style) =>
          style.id == params.id ? (
            <div className="details__style__card">
              <h1 className="h1__style__details">{style.style}</h1>
              <h3>{style.description}</h3>
              <img src={style.image} alt={style.name} className="img__musicdetails" />
              <h2 className="name__artist">{style.artist}</h2>
            </div>
          ) : null
        )}
        <h2>You might like:</h2>

        <Quote extract={extract} setExtract={setExtract}/>
      </div>
    </div>
  );
}

export default MusicDetails;
