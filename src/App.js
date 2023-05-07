import logo from "./logo.svg";
import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import IndividualBlogPostOne from "./pages/blogReadMoreOne";
import IndividualBlogPostTwo from "./pages/blogReadMoreTwo";
import { RegisterPage } from "./pages/register";
import { LoginPage } from "./pages/login";
import { Write } from "./pages/write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogReadMoreOne" element={<IndividualBlogPostOne />} />
        <Route path="/blogReadMoreTwo" element={<IndividualBlogPostTwo />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
