import React, { useEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count); //executes atleast once then it depends on variables in the array .. 1

    return () => {
      console.log("This is a cleanup() Prev count : ", count); //executes 1st then goes to above code part inside the useEffect but this is an optional when this component rerenders it will run this function then only the main logic for clean up but for 1st time when component mounts then it is exe once - this is before mounting the new state
    };
  }, [count]); //dependency array
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </>
  );
};

export default Effects;

/*

useEffect is a hook that allows you to perform side effects in your functional components, such as fetching data, manually changing the DOM, or setting up subscriptions.(these shouldn’t happen directly inside the render - bcoz render happens like every ms and it should be like just simple calculations and return UI) It runs after every render by default but can be controlled with a dependency array. - when state changes, u want to do something side ways then useEffect

-  - whenever componenet re-renders
[] - only 1 time when component mounts
[var] - whenever these variable changes 
*/
