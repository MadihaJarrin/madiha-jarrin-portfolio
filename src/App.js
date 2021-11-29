import * as React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Contact from "./pages/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <Routes>
        <Route path="/" element={<Header />} />

      </Routes> */}
    </div>
  );
}

export default App;
