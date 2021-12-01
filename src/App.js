import * as React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Contact from "./pages/Home/Contact/Contact";
import Explore from "./pages/Explore/Explore";
import Explore2 from "./pages/Explore/Explore2";
import Explore3 from "./pages/Explore/Explore3";
import Explore4 from "./pages/Explore/Explore4";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore2" element={<Explore2 />} />
          <Route path="/explore3" element={<Explore3 />} />
          <Route path="/explore4" element={<Explore4 />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
      </Router>
      {/* <Routes>
        <Route path="/" element={<Header />} />

      </Routes> */}
    </div>
  );
}

export default App;
