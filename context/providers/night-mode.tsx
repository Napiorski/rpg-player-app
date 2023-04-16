import * as React from "react";

const nightModeButton = document.getElementById("night-mode-button");
if (nightModeButton) {
  nightModeButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");

    const isNightMode = document.body.classList.contains("night-mode");
    localStorage.setItem("nightMode", String(isNightMode));
  });
}

const storedNightMode = localStorage.getItem("nightMode");
if (storedNightMode === "true") {
  document.body.classList.add("night-mode");
}

<button id="night-mode-button">Toggle Night Mode</button>;
