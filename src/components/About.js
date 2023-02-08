import Profile from "./Profile";
import Projects from "./Projects";

const About = () => {
  console.log("About - Render");
  return (
    <div className="about-us">
      <h1>About</h1>
      <Profile name="Apoorv" />
      <Projects name="HCL" />
    </div>
  );
};

export default About;
