import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("Component did mount");
  }
  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Test Component</h1>
      </div>
    );
  }
}
export default Test;
