
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Blog from "./Blog.js";
import Contact from './Contact.js';
import Nopage from './Nopage.js';
import Home from './Home.js';
import Layout from './Layout.js';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route index element={<Layout />}></Route>
  <Route path='home' element={<Home />}></Route>
  <Route path="blog" element={<Blog />}></Route>
  <Route path="contact" element={<Contact />}></Route>
  <Route path="*" element={<Nopage />}></Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
