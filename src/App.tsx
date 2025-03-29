import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Subject from "./pages/Subject";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:subjectId" element={<Subject />} />
      </Routes>
    </Router>
  );
};

export default App;
