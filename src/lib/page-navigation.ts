let pendingPath: string | null = null;
export function beginPageNavigation(href: string) {
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin || url.hash) return;
  pendingPath = url.pathname === window.location.pathname ? null : url.pathname;
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
export function finishPageNavigation(pathname: string) {
  if (pendingPath !== pathname) return;
  pendingPath = null;
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
