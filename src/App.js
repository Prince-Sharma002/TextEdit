import logo from './logo.svg';
import './App.css';
import Navbar from './Compoenets/Navbar';
import Form from './Compoenets/Form';
import About from './Compoenets/About';
import { useEffect, useState } from 'react';
import Alert from './Compoenets/Alert';


function App() {

  const [darktext , setdarktext] = useState("Dark");
  

  const togglemode = ()=>{
    if(darktext === "Dark"){
      setdarktext("Light");
      document.body.style.backgroundColor =  "black";
      showalert("Dark Mode Enabled" , "success");
    }
    else{
      setdarktext("Dark");
      document.body.style.backgroundColor =  "white";
      showalert("Light Mode Enabled" , "success");
    }   
  }

  const [alertmsg , setalertmsg ] =  useState(null);
  const showalert = (msg , type)=>{
    setalertmsg({
      type : type,
      msg : msg
    })

    setTimeout(() => {
      setalertmsg(null);
    }, 1000);
  }

  return (
<>

  <Navbar title="TEXTEDIT" darktext={darktext} togglemode={togglemode} />
  <Form title="TEXTEDIT" darktext={darktext} showalert={showalert}/>
  {/* <About /> */}
  <Alert alertmsg={alertmsg} />

  </>

  
  );
}

export default App;

