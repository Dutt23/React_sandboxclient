import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  //   componentWillMount() {
  //     console.log("Component will mount");
  //   }

  //   componentDidUpdate() {
  //     console.log("Component did update");
  //   }

  //   componentWillUpdate() {
  //     console.log("Component will update");
  //   }
  // // Getting depricated
  // // To use put UNSAFE_componentWillReceiveProps
  // // As React is becoming more asynchronouse in nature
  //   componentWillReceiveProps(nextProps) {}

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
