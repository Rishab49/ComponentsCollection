import "./DatePicker.css";
import SVGContainer from "../SVGComponents/SVGContainer/SVGContainer";
import { useState } from "react";
import PLANETICON from "../../../assets/saturn.png";
let d = new Date();

export default function DatePicker() {
  const [date, setDate] = useState(d);
  const [shouldReload,setShouldReload] = useState(0);
  const [isActive,setIsActive] = useState(false);
  function incrementDate() {
    setDate((state) => {
      state.setUTCDate(state.getUTCDate() + 1);
      return state;
    });

    setShouldReload(state => state+1);
  }

  function decrementDate() {
    setDate((state) => {
      state.setUTCDate(state.getUTCDate() - 1);
      return state;
    });

    setShouldReload(state => state+1);
  }

  let date_str =`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` ;
  return (
    <div className="date-picker" onClick={() => setIsActive((state) => !state)} value={date_str}>
      <div className="date">
        {date_str}
        <img src={PLANETICON} className="planet-icon"></img></div>
      <SVGContainer incrementDate={incrementDate} decrementDate={decrementDate} isVisible={isActive} date={date}/>
    </div>
  );
}
