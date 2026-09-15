// Keep this version string in sync with the badge in index.html.
// Bump it (e.g. 1.0 -> 2.0), push to main, and the pipeline redeploys automatically.
const VERSION = "2.0";

document.addEventListener("DOMContentLoaded", () => {
  const versionEl = document.getElementById("version");
  if (versionEl) versionEl.textContent = "Version: " + VERSION;

  const metaEl = document.getElementById("meta");
  if (metaEl) {
    metaEl.textContent = "Page loaded at " + new Date().toLocaleString();
  }
});
