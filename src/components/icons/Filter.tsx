import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 10"
    {...props}
  >
    <path
      fill="#121212"
      d="M8.25 8.333a.625.625 0 0 1 0 1.25h-2.5a.625.625 0 1 1 0-1.25zm2.5-4.166a.625.625 0 1 1 0 1.25h-7.5a.625.625 0 0 1 0-1.25zM13.25 0a.625.625 0 1 1 0 1.25H.75A.625.625 0 1 1 .75 0z"
    />
  </svg>
);
export default SvgFilter;
