import { SVGProps } from "react";

export function LilyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
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
      {/* 茎 */}
      <path d="M12 22V14" />
      {/* 葉 */}
      <path d="M8 16C8 16 10 14 12 14C14 14 16 16 16 16" />
      {/* 花 */}
      <path d="M12 14C12 14 7 12 7 8C7 4 12 2 12 2C12 2 17 4 17 8C17 12 12 14 12 14Z" />
      <path d="M10 7C10 7 12 6 12 4" />
      <path d="M14 7C14 7 12 6 12 4" />
    </svg>
  );
}
