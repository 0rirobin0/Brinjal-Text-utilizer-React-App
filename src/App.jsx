import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Footer from "./components/Footer"
import About from "./components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="BRINJAL" />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextArea showAlert={showAlert} />} />
        </Routes>
       
        <Footer/>



      </Router>
    </>
  );
}

export default App;
