(() => {
  const storageKey = "site-theme";
  const root = document.documentElement;

  let savedTheme = "light";

  try {
    if (localStorage.getItem(storageKey) === "dark") {
      savedTheme = "dark";
    }
  } catch {
    // Keep the light default when storage is unavailable.
  }

  root.dataset.theme = savedTheme;

  window.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");

    if (!toggle) {
      return;
    }

    const updateToggle = () => {
      const isDark = root.dataset.theme === "dark";
      const nextTheme = isDark ? "light" : "dark";

      toggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
      toggle.setAttribute("title", `Switch to ${nextTheme} mode`);
    };

    updateToggle();

    toggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";

      try {
        localStorage.setItem(storageKey, root.dataset.theme);
      } catch {
        // The toggle still works for the current page when storage is unavailable.
      }

      updateToggle();
    });
  });
})();
