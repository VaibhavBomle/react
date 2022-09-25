import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
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

  const toggleMode = () =>{
    if(mode === `light`){
      setMode(`dark`)
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark mode has been enable ","Success")
    }else{
      setMode(`light`)
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enable ","Success")

    }
  }
  return (
    <>
      <Navbar title = "Textutils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className='container'>
          <TextForm showAlert = {showAlert} heading= "Enter the text to analyze" mode = {mode}/>
      </div>
      {/* <About/> */}
      
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
