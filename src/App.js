import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ===============

// styling
import "./App.css";
// ===============

// komponen
import Footer from "./components/footer";
import Navigasi from "./components/navigasi";
// ===============

// routing
import Main from "./pages/main/main";
import Trending from "./pages/trending/trending";
import Olahraga from "./pages/olahraga/olahraga";
import Tekhnologi from "./pages/tekhnologi/tekhnologi";
import Masuk from "./pages/masuk/masuk";
import Daftar from "./pages/daftar/form-register";
// ===============

function App() {
  return (
    <>
      <Router>
        <Navigasi />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/olahraga" element={<Olahraga />} />
          <Route path="/tekhnologi" element={<Tekhnologi />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
