import { UiIcon } from "./ui-icon";

export function Arrow({
  direction = "right",
}: {
  direction?: "right" | "left";
}) {
  return <span aria-hidden="true"><UiIcon name={direction} /></span>;
}
