import React from "react";
import Tooltip from "./Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <div className="tooltip-container">
        <div className="tooltip-row">
          {/* Command: npm install @tippy.js/react tippy.js */}
          {/* Install the required dependencies for tooltips */}
          {/* Tooltip Component with top position */}
          <Tooltip position="top" tooltipContent="This is a top tooltip" />
        </div>
        <div className="tooltip-row">
          {/* Tooltip Component with bottom position */}
          <Tooltip position="bottom" tooltipContent="This is a bottom tooltip" />
        </div>
        <div className="tooltip-row">
          {/* Tooltip Component with left position */}
          <Tooltip position="left" tooltipContent="This is a left tooltip" />
        </div>
        <div className="tooltip-row">
          {/* Tooltip Component with right position */}
          <Tooltip position="right" tooltipContent="This is a right tooltip" />
        </div>
      </div>
    </div>
  );
}

export default App;


