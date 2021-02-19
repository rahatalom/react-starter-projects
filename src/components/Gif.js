import React, { useState, useEffect } from "react";
import "../components/gif.css";
function Gif() {
  const [name, setName] = useState("boruto");
  const [text, setText] = useState("");
  const [gif, setGif] = useState([]);
  const [gif1, setGif1] = useState([]);
  const [gif2, setGif2] = useState([]);
  const [gif3, setGif3] = useState([]);
  const [gif4, setGif4] = useState([]);
  const [gif5, setGif5] = useState([]);
  const [gif6, setGif6] = useState([]);
  const [gif7, setGif7] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        name +
        "&api_key=U9FMnArLhh8zLmXm8KRKUJAJsEJUCPHf&limit=12&rating=g"
    )
      .then((res) => res.json())
      .then((result) => {
        setGif(result.data[0].images.downsized.url);
        setGif1(result.data[1].images.downsized.url);
        setGif2(result.data[2].images.downsized.url);
        setGif3(result.data[3].images.downsized.url);
        setGif4(result.data[4].images.downsized.url);
        setGif5(result.data[5].images.downsized.url);
        setGif6(result.data[6].images.downsized.url);
        setGif7(result.data[7].images.downsized.url);
      });
  });
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleClick = () => {
    setName(text);
    setText("");
  };
  return (
    <div className="gifMain">
      <div className="gifBox">
        <div className="gifBoxHeader">
          <h1>Gif</h1>
          <div className="gifBoxSearcher">
            <input value={text} onChange={handleChange} />
            <button onClick={handleClick}> Search</button>
          </div>
        </div>

        <div className="gifs">
          <div className="gifInner">
            <img src={gif}></img>
            <img src={gif1}></img>
            <img src={gif2}></img>
            <img src={gif3}></img>
          </div>
          <div className="gifInner">
            <img src={gif4}></img>
            <img src={gif5}></img>
            <img src={gif6}></img>
            <img src={gif7}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gif;
