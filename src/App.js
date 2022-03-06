import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
