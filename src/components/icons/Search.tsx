import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M13.473 13.473a.67.67 0 0 1-.946 0l-2.16-2.166q.52-.42.94-.94l2.166 2.16c.26.26.26.686 0 .946"
      clipRule="evenodd"
    />
    <path
      fill="#AFAFAF"
      fillRule="evenodd"
      d="M6.5 11.333a4.833 4.833 0 1 0 0-9.666 4.833 4.833 0 0 0 0 9.666m0 1.334A6.167 6.167 0 1 0 6.5.333a6.167 6.167 0 0 0 0 12.334"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
