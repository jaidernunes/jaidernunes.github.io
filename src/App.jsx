import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;