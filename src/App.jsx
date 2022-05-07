import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Surveys from "./pages/Survey";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:id" element={<Surveys />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
