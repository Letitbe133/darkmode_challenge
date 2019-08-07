// DOM elements
const switcher = document.querySelector("#mode-switcher");
const body = document.querySelector("body");
const main = document.querySelector("main");

// functions

const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const switchMode = () => {
  toggleClass(body, "dark-bg");
  toggleClass(main, "dark-bg--darken");
  toggleClass(switcher, "dark-bg--darken");
  toggleClass(main, "dark-shadow");
  toggleClass(switcher, "dark-text");
  switcher.innerHTML = "Light Mode";
};

switcher.addEventListener("click", switchMode);
