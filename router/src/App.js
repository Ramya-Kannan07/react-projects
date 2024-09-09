import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './Aboiut';
import Login from './Login';
import Contact from './contact';

import './App.css';

function App() {
  return (
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Aboiut' element={<About />}></Route>
    <Route path='/Contact' element={<Contact />}></Route>
    <Route path='/Login' element={<Login />}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
