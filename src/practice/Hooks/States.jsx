import React, { useState } from "react";

const States = () => {
  const [counter, setCounter] = useState(0); // declare at the top level

  // const [counter, setCounter] = useState(functionName()); // every time runs if () performs high complex computation then slow downs the app - boz () calls a function
  // const [counter, setCounter] = useState(()=>{...}); // this runs only once not for every update - here u r giving reference

  // console.log("Counter : ", counter);  // but here the re-rendered value occurs
  function handleButton() {
    setCounter((counter) => counter + 1);
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

/*
useState is a React hook that allows you to add state to your functional components. It returns an array containing the current state and a function to update it. by returning a new State


steps :
State Update: When the setState function (e.g., setCount) is called to update the state, React schedules a re-render of the component.
Re-render: During this re-render, React re-evaluates the component function, creating a new virtual DOM tree based on the updated state.

*/
