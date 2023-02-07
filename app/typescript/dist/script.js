"use strict";
let hambar = document.querySelector(".dekstop-ham-container");
let mobile_navigation = document.querySelector(".nav-in-ham");
let mobile_navClose = document.getElementById("close-nav-in-ham");
hambar.addEventListener("click", () => {
    mobile_navigation.classList.remove("d-none");
});
mobile_navClose.addEventListener("click", () => {
    mobile_navigation.classList.add("d-none");
});
//# sourceMappingURL=script.js.map