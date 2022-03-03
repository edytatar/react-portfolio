import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
