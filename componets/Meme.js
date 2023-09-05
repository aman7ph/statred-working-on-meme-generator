import React from 'react';
//mport memesData from './../data/memeData.js';
const Meme = () => {
  const [all_memes, setAllmemeimage] = React.useState([]);
  const [meme, setmeme] = React.useState({
    upper_caption: '',
    bottom_caption: '',
    random_meme_image: 'https://i.imgflip.com/1x6f.jpg',
  });
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllmemeimage(data.data.memes));
  }, []);
  const randomMemeImage = () => {
    const rnad_num = Math.floor(Math.random() * all_memes.length);
    setmeme((prev_meme) => ({
      ...prev_meme,
      random_meme_image: all_memes[rnad_num].url,
    }));
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setmeme((prevCaption) => ({
      ...prevCaption,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="caption_adder">
        <input
          type="text"
          placeholder="upper caption"
          className="Minput"
          onChange={handleChange}
          name="upper_caption"
          value={meme.upper_caption}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="Minput"
          onChange={handleChange}
          name="bottom_caption"
          value={meme.bottom_caption}
        />
        <button className="btn" onClick={randomMemeImage}>
          Add caption
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.random_meme_image}
          alt="meme_image_tobe_captioned"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.upper_caption}</h2>
        <h2 className="meme--text bottom">{meme.bottom_caption}</h2>
      </div>
    </main>
  );
};

export default Meme;
