import logo from './logo.svg';
import React,{useMemo,useState} from 'react';
import './App.css';

function App() {
  const [number,setNum]=useState(0)
  // const [count,setcount]=usestate[0]
  function cubeNum(num){
    return Math.pow(num,5)
  }
  const result=useMemo(()=>{
    return cubeNum(number)
  },[number])

  //const result=cubeNum(number)
  return (
    <>
  <input type='number' value={number} onChange={(e)=>setNum(e.target.value)}></input> 
  <h1>{result}</h1>
  {/* <button onClick={()=>{setcount(count+1)}}>counter++</button>*/}
  </>
  
  );
}

export default App;
