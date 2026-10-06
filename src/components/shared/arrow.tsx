export function Arrow({
  direction = "right",
}: {
  direction?: "right" | "left";
}) {
  return <span aria-hidden="true">{direction === "right" ? "→" : "←"}</span>;
}
