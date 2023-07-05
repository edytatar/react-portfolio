import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Polari from "./pages/Polari";
import Neighorgoods from "./pages/Neighborgoods";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/polari' element={<Polari />} />
          <Route path='/neighorgoods' element={<Neighorgoods />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
