
import type { SVGProps } from "react";
const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 5"
    {...props}
  >
    <path
      fill="#AFAFAF"
      d="M.146.146a.5.5 0 0 1 .708 0L4 3.293 7.146.146a.5.5 0 1 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 0-.708"
    />
  </svg>
);
export default SvgDown;
