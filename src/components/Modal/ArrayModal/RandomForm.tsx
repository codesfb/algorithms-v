import Button from "../../Button/Button";
import { useState } from "react";

function RandomForm() {
  const [size, setSize] = useState("");

  return (
    <>
      <h2>Random Array</h2>

      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <Button text="Generate" color = "bg-orange"/>
    </>
  );
}

export default RandomForm;
