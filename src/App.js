import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import categories from "./Components/Categories/categories";
import RandomMeal from "./Components/RandomMeal/RandomMeal";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={categories} />
          <Route exact path="/random" component={RandomMeal} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
