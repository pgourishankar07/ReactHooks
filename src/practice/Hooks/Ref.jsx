import React, { useState, useRef } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleClick() {
    setCount(count + 1); //this makes re-render the component that why u see the updation in the web page
    countRef.current++; //but without the above code the value in web page will be static because it doesnt re-render the page after updation

    console.log("useState : ", count);
    console.log("useRef   : ", countRef.current);
  }

  return (
    <>
      {/* Count : {count} */}
      Count : {countRef.current}
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Ref;

/*________NOTES_________
- refs are used to get direct access to a DOM node or an instance of a class component.
- they can be assigned using the useRef hook, which returns a mutable reference object where .current property is initialized with passed argument (initial value).
- they allow us to perform tasks that can’t be achieved through props and state.
- we use the `useRef` hook in functional components to create a reference object, which is mutable and persists across renders.

it is less simialr to useState but the difference is it doesn't re-render the component(not used for rendering usecases)
and the ref values are not used inside the return part of the component 
ref make update and read the updated value instantly without waiting for any re-render
________________________
const inputRef = useRef < HTMLInputElement | null > (null); //to hold a reference to a DOM element(input tag or null) and initial value is null
useEffect(() => {
  //when page loads for 1st time then we have input tag so it inputRef refers to the HTMLInputElement then it is true value so it focus on that input box
  inputRef.current?.focus();
}, []);

return <input type="text" ref={inputRef} />;

*/
