import React from 'react';
import memesData from './../data/memeData.js';
const Meme = () => {
  const [all_meme_image, setAllmemeimage] = React.useState(memesData);
  const [meme, setmeme] = React.useState({
    upper_caption: '',
    bottom_caption: '',
    random_meme_image: 'https://i.imgflip.com/1x6f.jpg',
  });

  const randomMemeImage = () => {
    const meme_arr = all_meme_image.data.memes;
    const rnad_num = Math.floor(Math.random() * meme_arr.length);
    setmeme((prev_meme) => ({
      ...prev_meme,
      random_meme_image: meme_arr[rnad_num].url,
    }));
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
      <img src={meme.random_meme_image} alt="meme_image_tobe_captioned" />
    </main>
  );
};

export default Meme;
