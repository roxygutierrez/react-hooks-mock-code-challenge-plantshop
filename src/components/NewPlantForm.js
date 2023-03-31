import React, { useState } from "react";

function NewPlantForm({ onHandleNewPlantForm }) {
  //make it a controlled form by setting state here
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  //func to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleNewPlantForm({
      name: name,
      image: image,
      price: price,
    });
  };

  return (
    //add value to each input to make it a controlled form
    //onChange event to set state of input
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
