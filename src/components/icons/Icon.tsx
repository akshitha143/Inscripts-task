import * as React from "react";
import type { SVGProps } from "react";
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#AFAFAF"
      d="M7 .333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 7 .333M3.98 5.646a.5.5 0 0 0 0 .708L6.646 9.02a.5.5 0 0 0 .708 0l2.666-2.666a.5.5 0 1 0-.707-.708L7 7.96 4.687 5.646a.5.5 0 0 0-.707 0"
    />
    <path
      fill="#000"
      fillOpacity={0.7}
      d="M7 .333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 7 .333M3.98 5.646a.5.5 0 0 0 0 .708L6.646 9.02a.5.5 0 0 0 .708 0l2.666-2.666a.5.5 0 1 0-.707-.708L7 7.96 4.687 5.646a.5.5 0 0 0-.707 0"
      style={{
        mixBlendMode: "hue",
      }}
    />
    <path
      fill="#fff"
      fillOpacity={0.16}
      d="M7 .333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 7 .333M3.98 5.646a.5.5 0 0 0 0 .708L6.646 9.02a.5.5 0 0 0 .708 0l2.666-2.666a.5.5 0 1 0-.707-.708L7 7.96 4.687 5.646a.5.5 0 0 0-.707 0"
    />
  </svg>
);
export default SvgIcon;
