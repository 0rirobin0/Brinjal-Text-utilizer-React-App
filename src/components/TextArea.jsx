import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const setuppercase = () => {
    console.log("Uppercase button is clicked");
    setText(text.toUpperCase());
  };
  const setlowercase = () => {
    console.log("LowerCase button is clicked");
    setText(text.toLowerCase());
    console.log(text);
  };
  const countletter = () => {
    console.log("Count Letter");
    alert(text.length);
  };

  const findreplace = () => {
    let find = prompt("Find");
    let replace = prompt("Replace");
    setText(text.replace(find, replace));
    console.log(text);
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
        placeholder="Enter Text here"
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

      <button type="button" className="btn btn-primary" onClick={countletter}>
        count
      </button>

      {/* find and replace */}
      <button type="button" className="btn btn-secondary" onClick={findreplace}>
        Find And Replace
      </button>
    </div>
  );
}
