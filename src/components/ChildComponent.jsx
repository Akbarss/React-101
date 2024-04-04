import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h6>{props.description}</h6>
    </div>
  );
};

export default ChildComponent;
