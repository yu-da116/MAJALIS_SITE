import { SVGProps } from "react";

export function VBAIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Document base */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      {/* Corner fold */}
      <path d="M14 2v6h6" />
      {/* VBA text */}
      <path d="M8 13L10 17" />
      <path d="M12 13L10 17L8 13" />
      <path d="M13 13H15L16 17" />
      <path d="M16 13L17 17" />
    </svg>
  );
}
