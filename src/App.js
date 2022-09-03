
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Menu from './Component/Menu';

import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <HashRouter>
      
      <div className="App">
        <Routes>
          <Route path="/" element={ <Menu /> }>
            <Route index element={ <Home /> } />
            <Route path="home" element={ <Home /> } />
            <Route path="about" element={ <About /> } />
          </Route>
        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
