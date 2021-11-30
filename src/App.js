import "./styles.css";
import React, { useState } from "react";

const emoticons = {
  "😂": "Tears of Joy",

  "❤️": "Red Heart",

  "😷": "Omicron",

  "💯": "Topper's Score",

  "🔥": "Lit",

  "😈": "Lucifer",

  "🐧": "Penguin",

  "🎄": "Christmas",

  "🏳️‍🌈": "Pride"
};

export default function App() {
  var emojiList = Object.keys(emoticons);

  const [emojiMeaning, setEmoji] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var output = emoticons[userInput];
    setEmoji(output);
    if (output === undefined) {
      setEmoji("Emoji not found");
    }
  }

  function clickHandler(emoji) {
    setEmoji(emoticons[emoji]);
  }

  return (
    <div className="flexContainer">
      <h1>Emoji Identifier</h1>

      <div className="inputContainer">
        <input
          type="text"
          className="emojiInput"
          placeholder="Enter an emoji to search"
          onChange={inputHandler}
        />
      </div>

      <h2 className="outputDiv">{emojiMeaning}</h2>

      <div className="emojiFlex">
        {emojiList.map((emoji) => {
          return (
            <p key={emoji} onClick={() => clickHandler(emoji)}>
              {emoji}
            </p>
          );
        })}
      </div>
    </div>
  );
}
