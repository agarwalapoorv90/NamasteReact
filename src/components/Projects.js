import { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super();
    console.log("Projects - constructor");
  }

  componentDidMount() {
    console.log("Projects - componentDidMount");
  }

  componentDidUpdate() {
    console.log("Projects - componentDidUpdate");
  }

  render() {
    console.log("Projects - Render");
    return (
      <>
        <h2>Projects:</h2>
        <h3>Current Project - {this.props.name}</h3>
      </>
    );
  }
}

export default Projects;
