import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const renderSinglePlant = plants.map((plant, index) => {
    return <PlantCard key={index} plant={plant} />;
  });
  return <ul className="cards">{renderSinglePlant}</ul>;
}

export default PlantList;
