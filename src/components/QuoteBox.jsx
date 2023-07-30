import React from "react";
import "./styles/QuoteBox.css";

const QuoteBox = ({ handleChangeQuote, quote }) => {
  return (
    <div className="quoteBox">
      <h1>Fortune Cookies</h1>
      <div className="quoteBox-info">
        <p>{quote.phrase}</p>
      </div>

      <button className="quoteBox-button" onClick={handleChangeQuote}>
        Try luck
      </button>

      <div className="quoteBox-author">
        <h4>Fuente: {quote.author}</h4>
      </div>
    </div>
  );
};

export default QuoteBox;
