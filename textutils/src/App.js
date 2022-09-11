import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
          {/* <Navbar title = "Textutils" aboutText = "About Text"/> */}
      <Navbar title = "Textutils"/>
      <div className='container'>
      <TextForm heading= "Enter the text to analyze"/>
      </div>
      
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
