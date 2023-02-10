
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar  } from "./components/NavBar.js";
import { Banner } from "./components/Banner";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;

