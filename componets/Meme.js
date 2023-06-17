import React from 'react';
import memesData from './../data/memeData.js';
const Meme = () => {
  const [memeimage, memeimageState] = React.useState(
    'https://i.imgflip.com/1x6f.jpg'
  );
  const randomMemeImage = () => {
    const memeArr = memesData.data.memes;
    memeimageState(memeArr[Math.floor(Math.random() * memeArr.length)].url);
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
      <img src={memeimage} alt="meme_image_tobe_captioned" />
    </main>
  );
};

export default Meme;
