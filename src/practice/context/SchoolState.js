import SchoolContext from "./SchoolContext";

const SchoolState = (props) => {
  const state1 = {
    name: "DAV",
    area: "Adambakkam",
  };
  const state2 = {
    name: "Crescent",
    area: "Vandaloor",
  };

  return (
    <SchoolContext.Provider value={{ state1, state2 }}>
      {props.children}
    </SchoolContext.Provider>
  );
};

export default SchoolState;
