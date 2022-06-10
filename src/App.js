import "animate.css/animate.min.css";
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Banner from './Components/Banner';
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
      
      <Routes>
        <Route to='/' element={<Banner></Banner>}></Route>
        <Route to='/home' element={<Banner></Banner>}></Route>
        <Route to='/about' element={<About></About>}></Route>
        <Route to='/project' element={<Projects></Projects>}></Route>
        <Route to='/contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  );
}

export default App;
