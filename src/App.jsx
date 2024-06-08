import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {

 const [alert,setalert] = useState(null);
 const showAlert = (type,message)=>
 {
  setalert({
    type:type,
    msg:message
  })
  setTimeout(()=>
  {
    setalert(null);
  },1500);
 }







  return (
    <>
   
      <Navbar title="BRINJAL" />
      <Alert alert={alert} />
      <TextArea  showAlert={showAlert}/>
     
      
    </>
  );
}

export default App;
