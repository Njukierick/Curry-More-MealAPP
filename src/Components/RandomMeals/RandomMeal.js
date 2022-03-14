import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/context";
import "./RandomMeal.scss";

const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <div className="random">
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="random-grid">
          <div className="random-grid-control">
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}>Generate Another Meal</button>
          </div>
          <div className="random-grid-instruction">
            <h4>Instruction</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomMeal;
