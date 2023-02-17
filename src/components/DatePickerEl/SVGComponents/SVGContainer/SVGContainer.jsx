import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Earth from "../Earth/Earth";
import Moon from "../Moon/Moon";
import Orbit from "../Orbit/Orbit";
import Sun from "../Sun/Sun";
import "./SVGContainer.css";

export default function SVGContainer({ incrementDate, decrementDate,isVisible,date }) {
  const EarthRef = useRef(null);
  const OrbitRef = useRef(null);
  const [totalLength, setTotalLength] = useState(0);
  const [earthCoord, setEarthCoord] = useState({ x: 0, y: 0 });
  const [currentDegree, setDegree] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);

  useEffect(() => {
    let totalLength = OrbitRef.current.getTotalLength();
    let degree = ((date.getMonth() + 1) * 30) + ((date.getDate()/30) * 30);
    let currentLength = totalLength * (degree / 360);
    let currentCoord = OrbitRef.current.getPointAtLength(currentLength);
    setTotalLength(totalLength);
    setEarthCoord(currentCoord);
    setDegree(degree);
  }, [date]);

  useEffect(() => {
    const onPointerDown = (e) => {
      EarthRef.current.setPointerCapture(e.pointerId);
      setIsPointerDown(true);
      // console.log("down");
    };
    const onPointerMove = (e) => {
      if (isPointerDown && e.pageX !== 0 && e.pageY !== 0) {
        let boundingRect =
          EarthRef.current.parentElement.getBoundingClientRect();
        let dx = e.pageX - (boundingRect.x + boundingRect.width / 2);
        let dy = e.pageY - (boundingRect.y + boundingRect.height / 2);
        let degree = (Math.atan2(dy, dx) * 180) / Math.PI;
        degree = degree < 0 ? 360 + degree : degree;
        let currentLength = totalLength * (degree / 360);
        let currentPoint = OrbitRef.current.getPointAtLength(currentLength);
        setDegree(degree);
        setEarthCoord(currentPoint);
        degree > currentDegree ? incrementDate() : decrementDate();
      }
    };
    const onPointerUp = (e) => {
      EarthRef.current.releasePointerCapture(e.pointerId);
      setIsPointerDown(false);
      // console.log("up");
    };

    EarthRef.current.addEventListener("pointerdown", onPointerDown);
    EarthRef.current.addEventListener("pointermove", onPointerMove);
    EarthRef.current.addEventListener("pointerup", onPointerUp);

    return () => {
      EarthRef.current?.removeEventListener("pointerdown", onPointerDown);
      EarthRef.current?.removeEventListener("pointermove", onPointerMove);
      EarthRef.current?.removeEventListener("pointerup", onPointerUp);
    };
  }, [isPointerDown,currentDegree]);

  return (
    <div className="svg-container" style={{
      zIndex:isVisible ? 100 : -100,
      opacity:isVisible ? 1 : 0
    }}>
      <Sun />
      <Orbit ref={OrbitRef} />
      <Moon earthCoord={earthCoord} degree={currentDegree} />
      <Earth ref={EarthRef} earthCoord={earthCoord} />
    </div>
  );
}
