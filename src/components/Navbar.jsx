import PropTypes from "prop-types";
import React, { useState,useEffect} from "react";



export default function Navbar(props) {


  const [isDarkMode, setdarkmode] = useState(false);





// onclick light
const lightmode =()=>
 { 
  setdarkmode(false);
  console.log("lightmode");
 }
// onclick darkmode
const darkmode =()=>
 {
  setdarkmode(true);
  console.log("darkmode");
 }

//  useeffect
useEffect(() => {
    
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}, [isDarkMode]); 




  return (

    <nav className="navbar navbar-expand-lg"  >
      <div className="container-fluid " >
        <a className="navbar-brand" href="/" id={isDarkMode ? "navtext-light": "navtext-dark"}>
          <img
            src="/brinjal.png"
            alt="logo"
            width="50px"
          />
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item" >
              <a className="nav-link active " aria-current="page"href="/">
                <p  id={isDarkMode ? "navtext-light": "navtext-dark"} >Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                <p id={isDarkMode ? "navtext-light": "navtext-dark"} >About</p>
              </a>
            </li>

            
            {/* dark mode */}
            <li className="darkmodebtn">
              <button type="button" className="btn btn-light"
              onClick={lightmode}>Light</button>

              <button type="button" className="btn btn-dark" onClick={darkmode}>Dark</button>
            </li>

          </ul>

        </div>
      </div>
    </nav>


  );
}


Navbar.PropTypes = {
  title: PropTypes.string,
};
