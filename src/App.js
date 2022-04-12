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
import Market from "./pages/market/market";
import Investment from "./pages/investment/investment";
import News from "./pages/news/news";
import Entrepreneur from "./pages/entrepreneur/entrepreneur";
import Syariah from "./pages/syariah/syariah";
import Tech from "./pages/tech/tech";
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
          <Route path="/market" element={<Market />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/news" element={<News />} />
          <Route path="/entrepreneur" element={<Entrepreneur />} />
          <Route path="/syariah" element={<Syariah />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
