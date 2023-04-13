import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsArr) => setPlants(plantsArr));
  }, []);

  const handleNewPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((savedPlant) => {
        setPlants([...plants, savedPlant]);
      });
  };

  const plantsToDisplay = plants.filter((plant) => {
    if (search === "") {
      return true;
    }
    return plant.name.toUpperCase().includes(search.toUpperCase());
  });

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search setSearch={setSearch} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
