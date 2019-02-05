import React from "react";

export default props => {
  return (
    <div>
      <h1 className="display-4">About the application</h1>
      {/* <h1 className="display-4">{props.match.params.id}</h1> */}
      <p className="lead">This is a simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
      {/* <p className="text-secondary">{props.match.params.name}</p> */}
    </div>
  );
};
