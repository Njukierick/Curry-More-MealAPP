import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import RandomMeal from "./Components/RandomMeals/RandomMeal";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/random" element={<RandomMeal />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
