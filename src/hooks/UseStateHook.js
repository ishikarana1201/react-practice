import React, { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState(
    "First, solve the problem. Then, write the code."
  );
  const handleName = () => {
    name === "First, solve the problem. Then, write the code."
      ? setName("Before software can be reusable it first has to be usable.")
      : setName("First, solve the problem. Then, write the code.");
  };
  return (
    <>
      <h1 className="title" onClick={handleName}>
        {name}
      </h1>
    </>
  );
};

export default UseStateHook;
