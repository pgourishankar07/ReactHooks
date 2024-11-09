import React, { useState, useMemo } from "react";

function ComplexCompute(num) {
  console.log("Calling Slow Function"); //While changing numbers u will notice lag in rendering the webpage
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

const Memo = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // const computedNum = ComplexCompute(num);
  const computedNum = useMemo(() => ComplexCompute(num), [num]);

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <div style={theme}>{computedNum}</div>
    </>
  );
};

export default Memo;

/*________NOTES_________
-used to memorize/cache a value or the result of a complex computation(which takes time to execute).
-so to avoid re computation for a same input(dependency variable) ,useMemo is used
-we need to give a list of dependency variable as a parameter so that if the value of those changes then only it will execute the computation
-or else sends the value it has memorized
-improves the performance of react app by avoiding unnecessary calculations
-so above is the exmaple,where if u change theme it doesnt compute again and agian
-use cases : 
Preventing Unnecessary Renders
Improving performance

-works similar to useEffect but has big different in its usage
-useEffect and useMemo are hooks that involve computations, useEffect is focused on handling side effects, while useMemo is focused on memoizing values to optimize performance.
Memoization is an optimization technique that involves caching the results of expensive function calls and returning the cached result when the same inputs occur again

*/
