import Profile from "./Profile";
import Projects from "./Projects";
import UserContext from "../utils/UserContext";

const About = () => {
  console.log("About - Render");
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div className="about-us">
          <h1>About {user.name}</h1>
          <Profile name="Apoorv" />
          <Projects name="HCL" />
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default About;
