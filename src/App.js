import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;
export const Valpass = (props) => {
  return (
    <div>
      <h1
        style={{ backgroundColor: props.backcolor, fontSize: props.textsize }}
      >
        {props.text}
      </h1>
    </div>
  );
};

export const Myapp = () => {
  return (
    <div>
      <Valpass text="first value" backcolor="red" textsize="20" />
      <Valpass text="second value" backcolor="yellow" textsize="30" />
      <Valpass text="third value" backcolor="green" textsize="40" />
    </div>
  );
};
