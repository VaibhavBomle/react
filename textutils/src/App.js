import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Link
} from "react-router-dom";


function App() {
  console.log("App   Starting...");
  const [mode, setMode] = useState(`light`);
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);

  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove(`bg-light`);
    document.body.classList.remove(`bg-danger`);
    document.body.classList.remove(`bg-success`);
    document.body.classList.remove(`bg-dark`);
    document.body.classList.remove(`bg-warning`);
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log("cls: "+cls)
    document.body.classList.add(`bg-`+cls)
    if(mode === `light`){
      setMode(`dark`)
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark mode has been enable ","Success");
     // document.title = "TextUtils - Dark Mode";
    }else{
      setMode(`light`)
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enable ","Success");
      //document.title = "TextUtils - Light Mode";

    }
  }

  // const toggleMode = () =>{
  //   if(mode === `light`){
  //     setMode(`dark`)
  //     document.body.style.backgroundColor = `#042743`;
  //     showAlert("Dark mode has been enable ","Success");
  //     document.title = "TextUtils - Dark Mode";
  //   }else{
  //     setMode(`light`)
  //     document.body.style.backgroundColor = `white`;
  //     showAlert("Light mode has been enable ","Success");
  //     document.title = "TextUtils - Light Mode";

  //   }
  // }
  return (
    <>
    <Router>
      <Navbar title = "Textutils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className='container'>
      <Switch>
          <Route path="/about">
            <About mode = {mode}/>
          </Route>
          <Route path="/">
           <TextForm showAlert = {showAlert} heading= "Enter text below" mode = {mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learning React is very easy
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
