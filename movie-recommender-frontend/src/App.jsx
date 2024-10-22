import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const Home = lazy(() => import("./pages/Home"));
const AIResponse = lazy(() => import("./pages/AIResponse"));
const DatabaseEntries = lazy(() => import("./pages/DatabaseEntries"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-response" element={<AIResponse />} />
            <Route path="/database-entries" element={<DatabaseEntries />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
