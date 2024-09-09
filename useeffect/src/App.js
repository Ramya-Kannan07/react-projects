import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  useEffect(()=>{function setTimeout(() => {
    setCount(count=>count+1)
  },2000)
})
//const[count,setCount]=useState(0)
//useEffect(()=>{ 
//callback  function and empty dependencies setTimeout(()=>{

    
  }, timeout);}
  return (
  );
}

export default App;
