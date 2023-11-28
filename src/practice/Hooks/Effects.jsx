import React, { useEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count); //executes atleast once then it depends on variables in the array

    return () => {
      console.log("This is a cleanup()"); //executes 1st then goes to above code part inside the useEffect but this is an optional
    };
  }, [count]); //dependency array
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Effects;
