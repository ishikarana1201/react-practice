import React from "react";
import UseStateHook from "../hooks/UseStateHook";
import Counter from "./Counter";
import DigitalClock from "./DigitalClock";
import ToDo from "./ToDo";

const Home = () => {
  return (
    <>
      <UseStateHook />
      <DigitalClock />
      <Counter />
      <ToDo />
    </>
  );
};

export default Home;
