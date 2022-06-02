import "animate.css/animate.min.css";
import './App.css';
import About from "./Components/About";
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
