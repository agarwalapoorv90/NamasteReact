import { useState } from "react";

const Instamart = () => {
  const [showSection, setShowSection] = useState("about");
  return (
    <>
      <h1 className="text-4xl">Instamart</h1>
      <Section
        isVisible={showSection === "about"}
        setIsVisible={() =>
          setShowSection(showSection === "about" ? "" : "about")
        }
        showSection={showSection}
        heading="About"
        description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <Section
        isVisible={showSection === "team"}
        setIsVisible={() =>
          setShowSection(showSection === "team" ? "" : "team")
        }
        showSection={showSection}
        heading="Team"
        description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <Section
        isVisible={showSection === "product"}
        setIsVisible={() =>
          setShowSection(showSection === "product" ? "" : "product")
        }
        showSection={showSection}
        heading="Product Details"
        description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
    </>
  );
};

const Section = ({ heading, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-2xl underline">{heading}</h3>
      <button
        className="rounded p-1 bg-black text-white"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible ? <p>{description}</p> : null}
    </div>
  );
};

export default Instamart;
