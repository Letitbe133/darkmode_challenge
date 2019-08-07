// theme object
const theme = {
  dark: {
    background: "#333",
    emphasis: "#1c1b1b",
    text: "#ccc",
    shadow: "5px 5px 20px #1c1b1b",
    dataAttribute: "light",
    switcherText: "Light Theme"
  },
  light: {
    background: "#fff",
    emphasis: "rgb(250, 169, 103)",
    text: "#333",
    shadow: "5px 5px 20px #ccc",
    dataAttribute: "dark",
    switcherText: "Dark Theme"
  }
};

// DOM elements
const switcher = document.querySelector("#mode-switcher");
const body = document.querySelector("body");
const main = document.querySelector("main");

// functions
const switchMode = () => {
  let mode = switcher.dataset.mode;
  body.style.background = theme[mode].background;
  switcher.style.background = theme[mode].emphasis;
  main.style.background = theme[mode].emphasis;
  main.style.boxShadow = theme[mode].shadow;
  switcher.style.color = theme[mode].text;
  switcher.innerHTML = theme[mode].switcherText;
  switcher.dataset.mode = theme[mode].dataAttribute;
};

switcher.addEventListener("click", switchMode);
