import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Notes from "./pages/Notes";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Algebralinear from "./pages/Algebralinear";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/algebralinear" element={<Algebralinear />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
