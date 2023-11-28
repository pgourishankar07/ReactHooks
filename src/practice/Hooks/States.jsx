import React, { useState } from "react";

const States = () => {
  const [counter, setCounter] = useState(0);

  // console.log("Counter : ", counter);  // but here the re-rendered value occurs
  function handleButton() {
    setCounter(counter + 1);
    console.log("Counter : ", counter); //the value of counter is referred to initial value before re-render
  }
  return (
    <>
      <div>Count : {counter}</div>
      <button onClick={handleButton}>Click</button>
      {/* <button onClick={() => setCounter(counter + 1)}>Click</button> */}
    </>
  );
};

export default States;
