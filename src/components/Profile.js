import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("Profile - constructor");
    super();
    this.state = {
      name: props.name,
    };
  }

  componentDidMount() {
    console.log("Profile - componentDidMount");
    this.timer = setInterval(() => {
      console.log("Profile - timer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Profile - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Profile - componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Profile - render");
    return (
      <div>
        <h2>Profile - {this.state.name}</h2>
        <button onClick={() => this.setState({ name: "Agarwal" })}>
          Change name
        </button>
      </div>
    );
  }
}

export default Profile;
