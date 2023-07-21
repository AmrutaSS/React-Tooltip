import React from "react";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';

// Tooltip component that receives 'position' and 'tooltipContent' as props
function Tooltip({ position, tooltipContent }) {
  // The 'Tippy' component wraps the button and shows the tooltip on hover
  return (
    <div>
      <Tippy
        content={tooltipContent}
        placement={position}
        className="HoverEffect"
      >
        <button className="Tooltip-btn">Hover over me!</button>
      </Tippy>
    </div>
  );
}

export default Tooltip;

