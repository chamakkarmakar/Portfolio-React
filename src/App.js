import "animate.css/animate.min.css";
import './App.css';
import About from "./Components/About";
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
