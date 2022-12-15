import React, { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  let classes = "btn btn-primary but";
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value === 0) {
      classes = "btn btn-primary but disabled";
    } else {
      setValue(value - 1);
    }
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <div className="main">
        <div className="counter">
          <h2 className="counter-text">Counter</h2>
          <button className={classes} onClick={increment}>
            +
          </button>
          <span className="counter-text">{value}</span>
          <button className={classes} onClick={decrement}>
            -
          </button>
        </div>
        <div className="resentDiv">
          <button className={classes} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
