import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const [isStocked, setIsStocked] = useState(true);

  const handleStockedPlantClick = () => {
    setIsStocked(!isStocked);
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button onClick={handleStockedPlantClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleStockedPlantClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
