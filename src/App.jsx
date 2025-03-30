import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import AcharCollection from './components/AcharCollection';
import Gallery from './components/Gallery';
import ApplicationForm from './components/ApplicationForm';
import Home from './components/Home';





function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
         
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/acharcollection" element={<AcharCollection/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/applicationform" element={<ApplicationForm/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
