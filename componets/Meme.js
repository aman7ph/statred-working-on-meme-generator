import React from 'react';
import memesData from './../data/memeData.js';
const Meme = () => {
  const randomMemeImage = () => {
    const memeArr = memesData.data.memes;
    const rand = Math.floor(Math.random() * memeArr.length);
    console.log(memeArr[rand].url);
  };
  return (
    <main>
      <div className="caption_adder">
        <input type="text" placeholder="upper caption" className="Minput" />
        <input type="text" placeholder="Bottom text" className="Minput" />
        <button className="btn" onClick={randomMemeImage}>
          Add caption
        </button>
      </div>
    </main>
  );
};

export default Meme;
