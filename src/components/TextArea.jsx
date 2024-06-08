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
  const ClearText =()=>
  {
    setText("");
  }

  const findreplace = () => {
    let find = prompt("Find");
    find.trim();
    let replace = prompt("Replace");
    setText(text.replace(find, replace));
    console.log(text);
  };

  const textchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="mb-3 ">
      <h1>{props.texttitle}</h1>
      <textarea
        className="form-control "
        id="myform"
        rows="8"
        value={text}
        placeholder="Enter Text here"
        onChange={textchange}
      ></textarea>
      <div className="clearbtn">
         {/* clear text */}
       <button type="button" className="btn btn-danger my-1" onClick={ClearText}>
        Clear Text
      </button>
      </div>
      

     {/* Summary Area */}

     <div className="container my-3">
      
       <p>{text.length ==0 ? 0 : text.split(" ").length} words and {text.length} characters</p>

     </div>




      {/* Button */}
      {/* convert to upper case */}
      <button type="button" className="btn btn-primary" onClick={setuppercase}>
        Convert To Uppercase
      </button>


      {/* convert to lower case */}

      <button
        type="button"
        className="btn btn-primary"
        onClick={setlowercase}
      >
        Convert To lowercase
      </button>


      {/* find and replace */}
      <button type="button" className="btn btn-primary" onClick={findreplace}>
        Find And Replace
      </button>


    </div>
    

    </>
  );
}
