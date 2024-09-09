import logo from './logo.svg';
import './App.css';
import {useMemo,useState} from 'react';

function App() {
  const [number,setNumber]=useState(0);
  function cubeNumber(numbers){
    return Math.pow(numbers,4)
  }

  const data= useMemo(()=>{
    return cubeNumber(number)
  },[number])
  return (
    <>
    <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
    {data}
    </>
  );
}

export default App;
