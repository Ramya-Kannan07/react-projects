
import React,{useRef} from 'react'
import './App.css';

function App() {
  const inputElem=useRef();
  const btnClicked=()=>{
    inputElem.current.style.background="blue"
  }
  return (
    <>
   <input type="text" ref={inputElem}></input>
   <button onClick={btnClicked}>Clickme</button> </>
  );
}

export default App;
