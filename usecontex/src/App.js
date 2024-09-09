import logo from './logo.svg';
import './App.css';
import ContextProvider from './Appcontext';
import Footer from './Footer';

function App() {
  return (
    <>
    <ContextProvider/>
    <Footer />
    </>
  );
}

export default App;
