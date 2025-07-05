
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 8"
    {...props}
  >
    <path
      fill="#1A8CFF"
      d="M5.167.667a.5.5 0 0 1 .074.994l-.074.006h-1.5a2.333 2.333 0 0 0-.137 4.662l.137.004h1.5a.5.5 0 0 1 .074.995l-.074.005h-1.5A3.333 3.333 0 0 1 3.5.671l.167-.004zm5.166 0a3.333 3.333 0 0 1 .167 6.662l-.167.004h-1.5a.5.5 0 0 1-.074-.994l.074-.006h1.5a2.333 2.333 0 0 0 .137-4.662l-.137-.004h-1.5A.5.5 0 0 1 8.76.672l.074-.005zM3.667 3.5h6.666a.5.5 0 0 1 .068.995l-.068.005H3.667a.5.5 0 0 1-.068-.995zh6.666z"
    />
  </svg>
);
export default SvgLink;
