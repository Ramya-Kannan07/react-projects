import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState('welcome')
  const [count,setcount]=useState(0);
  const increasecount=()=>{
    setcount(count=> count+1)
    setcount(count=> count+1)
    setcount(count=> count+1)
    setcount(count=> count+1)
    setcount(count=> count+1)
  }


  const change=()=>{
    setname('To React')
  }
  return (
    <>
  <h1>{name}</h1>
   <button onClick={change}>Click</button>
   <h1>Count : {count}</h1> 
   <button onClick={increasecount}>Click to Increase</button>
   </>
  );
}

export default App;
