import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Moon.css";

const Moon = ({ earthCoord, degree }) => {
  const orbitRef = useRef(null);
  const [currentCoord, setCurrentCoord] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let totalLength = orbitRef.current.getTotalLength();
    let currentLength = totalLength * (degree / 360) * 5;
    if (currentLength > totalLength) {
      while (currentLength > totalLength) {
        currentLength = currentLength - totalLength;
      }
    }
    let coord = orbitRef.current.getPointAtLength(currentLength);
    setCurrentCoord(coord);
  }, [degree,earthCoord]);

  return (
    <svg className="moon" viewBox="0 0 500 500">
      <circle
        cx={earthCoord.x}
        cy={earthCoord.y}
        stroke="skyblue"
        strokeDasharray="10 10"
        fill="none"
        r="50"
        ref={orbitRef}
      ></circle>
      <circle
        cx={currentCoord.x}
        cy={currentCoord.y}
        r="5"
        fill="white"
      ></circle>
    </svg>
  );
};

export default Moon;
