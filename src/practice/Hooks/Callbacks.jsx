import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ handleClickProp }) => {
  console.log("ChildComponent rendered");
  return <button onClick={handleClickProp}>Click me</button>;
});

const Callbacks = () => {
  const [count, setCount] = useState(0);

  // Without useCallback - a new function is created on every render
  const handleClickF = () => {
    console.log("Button clicked");
    setCount(count + 1);
  };

  // With useCallback - the function is memoized and only recreated when dependencies change
  const handleClick = useCallback(handleClickF, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent handleClickProp={handleClick} />
    </div>
  );
};

export default Callbacks;

/*________NOTES_________
-useCallback is used to memoize a callback function, similar to how useMemo is used to memoize a value. 
-it is to optimize performance by preventing unnecessary recreations of callback functions, 
-especially in scenarios where these functions are passed down as props to child components.
*/
