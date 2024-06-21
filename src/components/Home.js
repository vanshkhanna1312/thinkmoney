import React, { useState} from 'react'
import "./Home.css"
import Navbar from './Navbar'
import twitterIcon from '../components/Assets/twitter.png'
import reloadIcon from '../components/Assets/reload.png'

function Home(){

  let quotes =[];

  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random =() => {
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  };

  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann  Wolfgang von Goethe",
  });

  const shareOnTwitter = () => {
    const twittertext = `${quote.text} - ${quote.author.split(',')[0]}`;
    const encodedText = encodeURIComponent(twittertext);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
    window.open(tweetUrl);
  };

  loadQuotes();

  return (
    <>
      <Navbar/>
      <section className='main-section'>
        <h1>Welcome to <p>ThinkMoney</p></h1>
      </section>

      <div className='container'>
        <div className="quote">{quote.text}</div>
        <div className='line'></div>
        <div className='bottom'>
          <div className='author'>- {quote.author.split(',')[0]}</div>
          <div className='icons'>
            <img src={reloadIcon} onClick={random} alt='Reload' />
            <img src={twitterIcon} onClick={shareOnTwitter} alt='Twitter' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
