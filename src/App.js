import './App.scss';
import Layout from './components/Layout/index';
import Home from './components/Home/index'
import AboutMe from './components/About-me/index';
import Work from './components/Work/index';
import Contact from './components/Contact/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" exact element={<AboutMe/>}  />
          <Route path="/work" element={<Work />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
