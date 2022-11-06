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
        }}
        onClick={handleClick}
      >
        Left click, tap or otherwise interact with this component to change its
        appearance.
      </div>
      <span className="steve.."></span>
    </>
  );
}

export default Toggle;

// lol
