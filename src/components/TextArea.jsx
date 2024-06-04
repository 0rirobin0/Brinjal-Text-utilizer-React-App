import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter text here");

  const setuppercase = () => {
    console.log("Uppercase button is clicked");
    setText(text.toUpperCase());
  };
  const setlowercase = () => {
    console.log("LowerCase button is clicked");
    setText(text.toLowerCase());
  };

  const textchange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="mb-3">
      <h1>{props.texttitle}</h1>
      <textarea
        className="form-control"
        id="myform"
        rows="8"
        value={text}
        onChange={textchange}
      ></textarea>

      <button type="button" className="btn btn-primary" onClick={setuppercase}>
        Convert To Uppercase
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={setlowercase}
      >
        Convert To lowercase
      </button>
    </div>
  );
}
