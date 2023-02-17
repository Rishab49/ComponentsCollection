import { memo } from "react";
import { forwardRef } from "react";
import "./Orbit.css";

const Orbit = memo(forwardRef((_,ref) => {

    return <svg className="orbit" viewBox="0 0 500 500" >
    <circle cx="250" cy="250" r="200" fill="none" stroke="skyblue" strokeDasharray="10 10" ref={ref}></circle>
    </svg>

}));

export default Orbit;