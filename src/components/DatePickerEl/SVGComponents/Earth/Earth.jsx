import { forwardRef } from "react";
import "./Earth.css";

const Earth = forwardRef(({ earthCoord }, ref) => {
  return (
    <svg className="earth" viewBox="0 0 500 500">
      <defs>
        <linearGradient id="grad2">
          <stop offset="5%" stopColor="#b0b0ff" />
          <stop offset="95%" stopColor="#2d2dff" />
        </linearGradient>
      </defs>
      <circle
        cx={earthCoord.x}
        cy={earthCoord.y}
        r="30"
        fill="skyblue"
        style={{ opacity: 0.6 }}
      ></circle>
      <circle
        cx={earthCoord.x}
        cy={earthCoord.y}
        r="35"
        fill="skyblue"
        style={{ opacity: 0.4 }}
      ></circle>
      <circle
        cx={earthCoord.x}
        cy={earthCoord.y}
        r="40"
        fill="skyblue"
        style={{ opacity: 0.2 }}
      ></circle>

      <circle
        cx={earthCoord.x}
        cy={earthCoord.y}
        r="25"
        fill="url(#grad2)"
        ref={ref}
      ></circle>
    </svg>
  );
});

export default Earth;
