// Initialize medium zoom.
$(document).ready(function () {
  // Zoom into the content column below the fixed navbar; layouts without a column (distill) keep the full-window default.
  const column = () => {
    const main = document.querySelector('[role="main"]');
    if (!main) return undefined;
    const r = main.getBoundingClientRect();
    const top = document.querySelector(".navbar")?.getBoundingClientRect().bottom ?? 0;
    // medium-zoom subtracts left from width and top from height, so both are far edges
    return { top: top, left: r.left, width: r.right, height: window.innerHeight };
  };
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    scrollOffset: Infinity, // scrolling is blocked while zoomed, so it must not close the zoom either
  });
  // Capture phase runs before medium-zoom's own click handler, so the column is measured as laid out now.
  document.addEventListener(
    "click",
    (e) => {
      const c = e.target.matches("[data-zoomable]") && column();
      if (c) medium_zoom.update({ container: c });
    },
    true
  );
  // Block scrolling by its events rather than overflow:hidden, which shifts layout and which iOS ignores.
  const block = (e) => e.preventDefault();
  medium_zoom.on("open", () => ["wheel", "touchmove"].forEach((t) => window.addEventListener(t, block, { passive: false })));
  medium_zoom.on("closed", () => ["wheel", "touchmove"].forEach((t) => window.removeEventListener(t, block)));
  window.addEventListener("resize", () => medium_zoom.close());
});
