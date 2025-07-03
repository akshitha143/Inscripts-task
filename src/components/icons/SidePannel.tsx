import * as React from "react";
import type { SVGProps } from "react";
const SvgSidePannel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 16"
    {...props}
  >
    <path
      fill="#618666"
      d="M16.75 0A3.25 3.25 0 0 1 20 3.25v9.5A3.25 3.25 0 0 1 16.75 16H3.25A3.25 3.25 0 0 1 0 12.75v-9.5A3.25 3.25 0 0 1 3.25 0zM3.25 1.5A1.75 1.75 0 0 0 1.5 3.25v9.5c0 .966.784 1.75 1.75 1.75h9.25v-13z"
    />
  </svg>
);
export default SvgSidePannel;
