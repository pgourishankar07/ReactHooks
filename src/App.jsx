import Context from "./practice/Hooks/Context";
import Effects from "./practice/Hooks/Effects";
import Reducer from "./practice/Hooks/Reducer";
import Ref from "./practice/Hooks/Ref";
import States from "./practice/Hooks/States";
import "./styles/App.css";
import SchoolState from "./practice/context/SchoolState";
import Memo from "./practice/Hooks/Memo";
import Callbacks from "./practice/Hooks/Callbacks";

function App() {
  return (
    <div className="App">
      <SchoolState>
        <Context />
      </SchoolState>
    </div>
  );
}

export default App;
