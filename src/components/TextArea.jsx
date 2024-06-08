import React, { useState } from "react";



export default function TextArea(props) {
  const [text, setText] = useState("");
  const [greet,setgreet] =useState("Have a Good Day!")

  
  
// set upper  

  const setuppercase = () => {
    console.log("Uppercase button is clicked");
    setText(text.toUpperCase());
  };
  // set lower
  const setlowercase = () => {
    console.log("LowerCase button is clicked");
    setText(text.toLowerCase());
    console.log(text);
  };
  // clear text
  const ClearText =()=>
  {
    alert("Are you sure?");
    props.showAlert("danger","Your Text will be deleted!!");
    setText("");
  }

  // camel case
   const camelcase =()=>
   {
    let camel =text.toLowerCase()                   
    .split(' ')                         
    .map((word, index) =>                // Map over each word
    word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and add the rest of the word
    )
    .join(' '); 
    setText(camel);
   }
  //  find and replace
  const findreplace = () => {
    let find = prompt("Find");
    find.trim();
    let replace = prompt("Replace");
    setText(text.replace(find, replace));
    console.log(text);
  };
//text on change
  const textchange = (event) => {
    setText(event.target.value);
  };
// copy text
  const copytext=()=>
  {
    console.log("copied!");
    var text = document.getElementById("myform")
    navigator.clipboard.writeText(text.value);
    props.showAlert('success','copied to clipboard');
  }



  return (
    <>
    <div className="mb-3 ">
      <h1>{greet}</h1>
      <textarea
        className="form-control "
        id="myform"
        rows="8"
        value={text}
        placeholder="Enter Text here"
        onChange={textchange}
        
      ></textarea>
      <div className="botbtn">
      
         {/* copy text */}
         <img className="my-2 mx-1" src="../../public/copy.png" alt="Copy Text"  height="30px" onClick={copytext}
         />

         {/* clear btn */}
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


      {/* convert to Camel case */}

      <button
        type="button"
        className="btn btn-primary"
        onClick={camelcase}
      >
        Convert To CamelCase
      </button>


      {/* find and replace */}
      <button type="button" className="btn btn-primary" onClick={findreplace}>
        Find And Replace
      </button>


    </div>
    

    </>
  );
}
