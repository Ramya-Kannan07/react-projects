import logo from './logo.svg';
import { useCallback ,useState} from 'react';
import Header from '.usercallback/Header';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const newFn=useCallback(()=>{},[])
  return (
    <>
   <Header newFn={newFn} />
   <h1>{count}</h1>
   <button onClick={()=>setCount(prev=>prev+1)}>Click Me</button>
   </>
  );
}

export default App;
