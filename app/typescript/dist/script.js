"use strict";
let hambar = document.querySelector(".dekstop-ham-container");
let mobile_navigation = document.querySelector(".nav-in-ham");
let mobile_navClose = document.getElementById("close-nav-in-ham");
mobile_navigation.classList.remove("d-none");
hambar.addEventListener("click", () => {
    mobile_navigation.classList.add("slideDown");
    mobile_navigation.classList.remove("slideUp");
    mobile_navigation.classList.remove("d-none");
});
mobile_navClose.addEventListener("click", () => {
    mobile_navigation.classList.remove("slideDown");
    mobile_navigation.classList.add("slideUp");
    setTimeout(() => {
        mobile_navigation.classList.add("d-none");
    }, 370);
});
//# sourceMappingURL=script.js.map