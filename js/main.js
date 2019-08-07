// DOM elements
const switcher = document.querySelector("#mode-switcher");
const body = document.querySelector("body");
const main = document.querySelector("main");

let darkModeEnabled = false;

// functions

const switchMode = () => {
  if (darkModeEnabled) {
    body.style.background = "#fff";
    switcher.style.background = "#ccc";
    main.style.background = "rgb(250, 169, 103)";
    main.style.boxShadow = "5px 5px 20px #ccc";
    switcher.style.color = "#333";
    switcher.innerHTML = "Dark Mode";
    darkModeEnabled = false;
  } else {
    body.style.background = "#333";
    switcher.style.background = "#1c1b1b";
    main.style.background = "#1c1b1b";
    main.style.boxShadow = "5px 5px 20px #1c1b1b";
    switcher.style.color = "#ccc";
    switcher.innerHTML = "Light Mode";
    darkModeEnabled = true;
  }
};

switcher.addEventListener("click", switchMode);
