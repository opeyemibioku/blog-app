import logo from "./logo.svg";
import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
