import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onHandleNewPlantForm, onHandlePlantSearch }) {
  return (
    <main>
      <NewPlantForm onHandleNewPlantForm={onHandleNewPlantForm} />
      <Search onHandlePlantSearch={onHandlePlantSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
