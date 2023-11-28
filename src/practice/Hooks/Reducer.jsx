import React, { useReducer } from "react";

function reducer(state, action) {
  //takes currentState and dispatch function with parameters
  console.log("The count is : ", state.count, " ", state.name);
  switch (action.type) {
    case "inc":
      return { count: state.count + 1, name: action.payload };
    case "dec":
      return { count: state.count - 1, name: action.payload };
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "Babloo" });
  //(mainReducerFunction,initial state) state --- is the object of values and dispatch --- is the function which calls the mainReducer function it can also take object values as parameters eg:type

  return (
    <>
      <div>Count : {state.count}</div>
      <button onClick={() => dispatch({ type: "inc", payload: "Bunty" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: "Gouri" })}>
        -
      </button>
      {state.name}
    </>
  );
};

export default Reducer;

/*________NOTES_________
useReducer is very similar to useState
it follows redux pattern of doing things
it takes in more arguements / properties than useState as an object
and its not used for small usecase like counter

-REDUX a complex state management tool 
-REDUCERS manages the state and return the updated state
-ACTIONS have 2 properties : (type,payload)  type is unique identifier and payload is data
-DISPATCH used to send actions to update the data and it calls the reducer function
*/
