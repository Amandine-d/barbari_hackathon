import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import Similar from './Similar';
import styleInfos from "./stylesInfos";
import "./Music.css";

function MusicDetails() {
  const params = useParams();
  const getInfos = () => {
    axios.get(`https://tastedive.com/api/similar?q=${params.id}`);
  };
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    axios
      .get(`http://quotes.stormconsultancy.co.uk/random.json`)
      .then((response) => {
        setQuote(response.data);
      });
  }, []);

  console.log(quote);
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
            </div>
          ) : null
        )}
        <h2>You might like:</h2>
        {quote ? (
          <div>
            <h4>{quote.quote}</h4>
            <h3>{quote.author}</h3>
          </div>
        ) : (
          "No chance today"
        )}
      </div>
    </div>
  );
}

export default MusicDetails;
