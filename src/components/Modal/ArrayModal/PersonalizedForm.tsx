import Button from "../../Button/Button";
import { useState } from "react";
function PersonalizedForm() {
  const [array, setArray] = useState("");

  return (
    <>
      <h2>Personalized Array</h2>

      <input
        value={array}
        onChange={(e) => setArray(e.target.value)}
        placeholder="1, 5, 2, 8, 4"
      />

      <Button text="Create" color="bg-pink" />
    </>
  );
}

export default PersonalizedForm;
