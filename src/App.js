import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

import Polari from './pages/Polari'
import Neighborgoods from './pages/Neighborgoods'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Routes>
        <Route>path='/polari' element={<Polari />} </Route>
        <Route>path='/neighborgoods' element={<Neighborgoods />}</Route>
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
