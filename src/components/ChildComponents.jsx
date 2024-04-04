import React from "react";

const ChildComponents = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default ChildComponents;
