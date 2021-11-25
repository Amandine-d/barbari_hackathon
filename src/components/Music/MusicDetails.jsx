import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import Similar from './Similar';
import styleInfos from "./stylesInfos";
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
      <button onClick={handleBack} className="btn__music">
        Back
      </button>
      <div className="music__details">
        {styleInfos.map((style) =>
          style.id == params.id ? (
            <div>
              <h1 className="h1__style__details">{style.style}</h1>
              <h2>Artist: { } {style.artist}</h2>
              <h3>{style.description}</h3>
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
