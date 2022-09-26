import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dataQuotes = data.quotes;
        const randomNum = Math.floor(Math.random() * dataQuotes.length);
        const randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
    <h1 className="name">Mark VaranVal</h1>
    <div className="box">
    
    
      <div className="text">
        <h5 className="day"> "Quote of the Day"</h5>
        <p>{quote}</p>
      </div>
      <div className="author">
        <p>
          <b>-- {author} </b>
        </p>
      </div>
      <hr />

      <div className="button">
        <div className="social_media">
          <a href="#" className="twt_quote">
            <i class="fas fa-clipboard"></i>
          </a>

          <a href="#" className="twt_quote">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <button className="new_quote" onClick={handleClick}>
          New_quote
        </button>
      </div>
    </div>
    </>
  );
};

export default Quotes;
