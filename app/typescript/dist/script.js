"use strict";
let hambar = document.querySelector(".dekstop-ham-container");
let mobile_navigation = document.querySelector(".nav-in-ham");
let mobile_navClose = document.getElementById("close-nav-in-ham");
let shopButton = document.querySelector(".shopBtn");
let classAnimation = ["slideDown", "slideUp", "d-none"];
hambar.addEventListener("click", () => {
    for (let i = 0; i < classAnimation.length; i++) {
        mobile_navigation.classList.toggle(classAnimation[i]);
    }
});
mobile_navClose.addEventListener("click", () => {
    for (let i = 0; i < classAnimation.length; i++) {
        if (i == 2) {
            setTimeout(() => {
                mobile_navigation.classList.toggle("d-none");
            }, 370);
        }
        else {
            mobile_navigation.classList.toggle(classAnimation[i]);
        }
    }
});
//# sourceMappingURL=script.js.map