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
      {/* 茎（緩やかな曲線） */}
      <path d="M12 22C12 22 11 18 12 14" />

      {/* 葉（より自然な曲線） */}
      <path d="M8 16C8 16 10 14 12 14C14 14 16 16 16 16" />

      {/* 花（より丸みを帯びた鈴型） */}
      <path d="M12 14C12 14 7 12 7 8C7 4 12 2 12 2C12 2 17 4 17 8C17 12 12 14 12 14Z" />

      {/* 花びらの装飾（より繊細な表現） */}
      <path d="M10 7C10 7 12 5 12 4" />
      <path d="M14 7C14 7 12 5 12 4" />

      {/* 追加の花びらの表現 */}
      <path d="M9 6C9 6 12 8 15 6" stroke-opacity="0.5" />
    </svg>
  );
}