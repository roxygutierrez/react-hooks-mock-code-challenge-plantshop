import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plantArr) => setPlants(plantArr));
  }, []);

  const handleNewPlantForm = (newPlant) => {
    console.log(newPlant);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((resp) => resp.json())
      .then((savedNewPlant) => setPlants([...plants, savedNewPlant]));
  };
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toUpperCase().includes(search.toUpperCase());
  });
  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onHandleNewPlantForm={handleNewPlantForm}
        onHandlePlantSearch={setSearch}
      />
    </div>
  );
}

export default App;
