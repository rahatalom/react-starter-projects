import React, { useState } from "react";
import "../components/diary.css";

function Diary() {
  const [text, setText] = useState("");
  const [entry, setEntry] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setEntry([...entry, text]);
    setText("");
  };

  const erase = () => {
    setEntry([]);
    setText("");
  };

  return (
    <div className="diary">
      <h1> Diary</h1>
      <div className="diarySearch">
        <input value={text} onChange={handleChange} />
        <button onClick={handleClick}>Write</button>
      </div>
      <div className="diaryEntry">
        <h4>Dear diary, </h4>
        {entry.map((entries) => {
          return <p>{entries}</p>;
        })}
      </div>
      <div className="diaryButton">
        <button onClick={erase}>Erase</button>
      </div>
    </div>
  );
}

export default Diary;
