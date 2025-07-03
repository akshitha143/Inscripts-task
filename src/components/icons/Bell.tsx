import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      fill="#121212"
      d="M9-.004a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.751L12 16.502a3 3 0 0 1-5.995.176L6 16.499l-4.725.001a1.25 1.25 0 0 1-1.147-1.748L1.5 11.594V7.496c0-4.155 3.352-7.5 7.5-7.5M10.5 16.5l-3 .003a1.5 1.5 0 0 0 2.993.144zM9 1.496c-3.32 0-6 2.674-6 6v4.41L1.656 15h14.696L15 11.907V7.509l-.004-.225A5.99 5.99 0 0 0 9 1.496"
    />
  </svg>
);
export default SvgBell;
