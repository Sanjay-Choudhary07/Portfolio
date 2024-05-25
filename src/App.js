import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks';
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
