 import './App.css'
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
import React, {useState} from 'react'
import Alert from './Components/Alert';
//import About from './Components/About';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
 
function App() {

  
  const [mode, setMode ]=useState('light')
  const [alert, setAlert]=useState(null)

   
  const showAlert=(message,type)=>{
             setAlert({
              msg: message,
              type: type
             })
        setTimeout(() => {
          setAlert(null);
        }, 1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#124567';
      showAlert("Dark mode has been enabled","success");
      document.title="Textutils - Dark Mode";
      setInterval(()=>{
        document.title='Textutils is Amazing';
      },2000);
      setInterval(()=>{
        document.title='Install Textutils Now';
      },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
const changeBgred=()=>{
  document.body.style.backgroundColor='red';
}
const changeBgskb=()=>{
  document.body.style.backgroundColor='skyblue';
}
const changeBgyellow=()=>{
  document.body.style.backgroundColor='yellow';
}
   
  return (
<>

<Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} skb={changeBgskb} red={changeBgred} yellow={changeBgyellow} />
<Alert alert={alert}/>
<div className="container ">
 
	
		
	<Forms heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
	
 
</div>

</>
  );
}

export default App;
