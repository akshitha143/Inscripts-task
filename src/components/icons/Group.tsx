
import type { SVGProps } from "react";
const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="white"
    viewBox="0 0 13 12"
    {...props}
  >
    <path
      d="M6.5 0a.5.5 0 0 1 .5.5v3.833h1.664c1.012 0 1.833.821 1.833 1.834v4.127l1.15-1.148a.5.5 0 1 1 .706.708l-2.003 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.708l1.147 1.147V6.167a.833.833 0 0 0-.833-.834h-4.33a.833.833 0 0 0-.834.834v4.126l1.147-1.147a.5.5 0 0 1 .707.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .707-.708L2.5 10.293V6.167c0-1.013.82-1.834 1.833-1.834H6V.5a.5.5 0 0 1 .5-.5"
    />
  </svg>
);
export default SvgGroup;
