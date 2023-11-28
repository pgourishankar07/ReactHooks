import React, { useContext } from "react";
import SchoolContext from "../context/SchoolContext";

const Context = () => {
  const myData = useContext(SchoolContext);

  return (
    <div>
      <p>
        I did my schooling in {myData.state1.name} located at
        {myData.state1.area}
      </p>
      <p>
        I did my UG in {myData.state2.name} located at
        {myData.state2.area}
      </p>
    </div>
  );
};

export default Context;

/*________NOTES_________
-store and having data in a context that is accessible to all other components inside the app without passing through props
-basically alternate of long chain of props 

-steps:
1.Create a context folder inside the project folder (for neat organization of files)
2.create a file nameContext.js which acts as a context api and import createContext
3.create a file nameState.js which contains data to be shared among the components usually known as state
4.Now you need to go to App.jsx and import the state and use the component between the other components and those will be coming under children components
5.Now you can use useContext hook in this file as shown

6.See 4 files : stepWise : schoolContext.js -> SchoolState.js -> App.jsx -> Context.jsx
FlowChart:
Context -> State -> Component

App - calling state
Component - calling context (where you want to show data there u import context)
*/
