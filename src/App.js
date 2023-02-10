
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar  } from "./components/NavBar.js";
import { Banner } from "./components/Banner";
import Navbar from "./components/Navbar"
import { Skills } from './components/skills';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;

