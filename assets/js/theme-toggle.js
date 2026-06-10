/*
 * Light/dark theme toggle.
 * Works together with _includes/head/custom.html, which loads the dark
 * stylesheet (disabled by default) and applies the saved/OS preference before
 * paint. This script wires up the masthead button to flip and persist it.
 */
(function () {
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    var link = document.getElementById("theme-dark-css");
    if (link) {
      link.disabled = !isDark;
    }
    document.documentElement.setAttribute("data-theme", theme);
    updateButton(isDark);
  }

  function updateButton(isDark) {
    var button = document.querySelector(".theme-toggle");
    if (!button) {
      return;
    }
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    var icon = button.querySelector("i");
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  }

  function init() {
    updateButton(currentTheme() === "dark");

    var button = document.querySelector(".theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        try {
          localStorage.setItem("theme", next);
        } catch (e) {}
        applyTheme(next);
      });
    }

    // Follow OS changes only while the user hasn't set an explicit preference.
    if (window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", function (event) {
          var stored = null;
          try {
            stored = localStorage.getItem("theme");
          } catch (e) {}
          if (!stored) {
            applyTheme(event.matches ? "dark" : "light");
          }
        });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
