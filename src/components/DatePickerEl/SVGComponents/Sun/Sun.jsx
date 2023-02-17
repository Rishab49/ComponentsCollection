import { memo } from "react";
import "./Sun.css";

const Sun = memo(() => {
  return (
    <svg className="sun" viewBox="0 0 500 500">
       <defs>
        <linearGradient id="grad">
          <stop offset="5%" stopColor="#ffeb3b" />
          <stop offset="95%" stopColor="#ffc107" />
        </linearGradient>
      </defs>
      {[1, 2, 3, 4].map((el) => (
        <circle
          cx="250"
          key={el}
          cy="250"
          r="75"
          fill="yellow"
          className="animated-rays"
          style={{ animationDelay: `${(el - 1) * 0.4}s` }}
        ></circle>
      ))}
      <circle cx="250" cy="250" r="75" fill="url(#grad)"></circle>
      
    </svg>
  );
});

export default Sun;
