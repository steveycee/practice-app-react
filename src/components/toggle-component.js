import { useState } from "react";
import "../app.css";

function Toggle() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div
        className="tile border"
        role={"button"}
        style={{
          // backgroundColor: isActive ? "salmon" : "",
          background: isActive ? "var(--primary-blue-gradient)" : "",
          color: isActive ? "white" : "",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <h2>Basic click/tap interaction component</h2>
        <p>
          Left click, tap or otherwise interact with this component to change
          its appearance.
        </p>
      </div>
    </>
  );
}

export default Toggle;

// lol
