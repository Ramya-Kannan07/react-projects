import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name,setName]=useState("WELCOME");
  const [counting,setCounting]=useState(0);
  const [count,setCount]=useState(100);

  const changeEvent=()=>{
    setName("Edex")
  }
  const changeCount=()=>{
    setCounting(counting=>counting+5)
  }
  const changeDecreaseCount=()=>{
    setCount(count=>count-5)
  }
  return (
    <>
    <h1 onClick={changeEvent}>{name}</h1>
    <h1>count:{counting}</h1>
    <button onClick={changeCount}>increase button</button>
   <h1>Decrease Count:{count}</h1>
   <button onClick={changeDecreaseCount}>Decrease Button </button>
   </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default App;
