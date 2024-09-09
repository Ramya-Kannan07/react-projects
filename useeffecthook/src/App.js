import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
  /*const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count=>count+1)
    },1000)
})*///call by method

/*const [count,setCount]=useState(0)
useEffect(()=>{
  setTimeout(()=>{
    setCount(count=>count+1)
  },5000);
},[])*///Empty dependencies

/*const[count,setCount]=useState(0)
useEffect(()=>{
  setTimeout(()=>{
    setCount(count=>count+1)
  },8000);
},[count])*/
  return (
<>
{count}</>
  );
}

export default App;
