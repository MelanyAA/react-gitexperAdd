import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExperApp = () => {
  // const categories = ["One Punch", "samurai x", "Dragon Ball"];
  const [Categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories((c) => [...Categories, "Naruto1"]);
  // };

  return (
    <>
      <h1>GitExperApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {Categories.map((c) => (
          <GifGrid key={c} Category={c} />
        ))}
      </ol>
    </>
  );
};
