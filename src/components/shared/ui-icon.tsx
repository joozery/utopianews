type IconName = "up-right" | "right" | "left" | "down" | "close" | "plus" | "check" | "pin" | "copy";

const paths: Record<IconName, string> = {
  "up-right": "M7 17 17 7M7 7h10v10",
  right: "M5 12h14m-6-6 6 6-6 6",
  left: "M19 12H5m6-6-6 6 6 6",
  down: "M12 5v14m-6-6 6 6 6-6",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M12 5v14M5 12h14",
  check: "m5 12 4 4L19 6",
  pin: "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  copy: "M9 9h11v11H9ZM15 5V3H3v12h2",
};

export function UiIcon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <path d={paths[name]} />
    </svg>
  );
}
