
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar  } from "./components/NavBar.js";
import { Banner } from "./components/Banner";
import Navbar from "./components/Navbar"
import { Skills } from './components/skills';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;

