import React from "react";
import axios from "axios";

function Quote({extract, setExtract}) {
  
  const getQuote = () => {
    axios.get(`http://quotes.stormconsultancy.co.uk/random.json`)
    .then((response) => {
        setExtract(response.data);
    })
  }
  return (
    <div>
  {extract ? (
    <>
    <div className="quote__music">
      <h4>{extract.quote}</h4>
      <h3>{extract.author}</h3>
    </div>
    <button type="button" onClick={getQuote}>Click</button>
    </>
  ) : (
    "No chance today"
  )}
  </div>
  )
}

export default Quote;