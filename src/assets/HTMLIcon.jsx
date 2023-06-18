import React from "react";

function HTMLIcon(props) {
  return (
    <svg
      height="50px"
      viewBox="0 0 32 32"
      width="48px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g>
        <polygon fill="#fb923c" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0" />
        <polygon fill="#fdba74" points="16,2 16,29.75 25.232,27.008 27.688,2" />
        <polygon
          fill="#FFFFFF"
          points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12,20.984 12.648,19 8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10"
        />
      </g>
    </svg>
  );
}

export default HTMLIcon;
