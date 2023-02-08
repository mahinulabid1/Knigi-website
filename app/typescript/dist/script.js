"use strict";
let hambar = document.querySelector(".dekstop-ham-container");
let mobile_navigation = document.querySelector(".nav-in-ham");
let mobile_navClose = document.getElementById("close-nav-in-ham");
let shopButton = document.querySelector(".shop-btn");
let bookShopNav = document.querySelector(".book-shop-separate");
let bookShopnavClose = document.querySelector(".empty-space-close");
let classAnimation = ["slideDown", "slideUp", "d-none"];
(() => {
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
})();
(() => {
    let navSwitch = false;
    bookShopNav.addEventListener("mouseenter", () => {
        navSwitch = true;
    });
    shopButton.addEventListener("mouseenter", () => {
        navSwitch = true;
        setTimeout(() => {
            if (navSwitch == true) {
                for (let i = 0; i < classAnimation.length; i++) {
                    bookShopNav.classList.toggle(classAnimation[i]);
                }
            }
        }, 700);
    });
    shopButton.addEventListener("mouseleave", () => {
        navSwitch = false;
    });
    bookShopnavClose.addEventListener("mousedown", () => {
        setTimeout(() => {
            if (navSwitch == false) {
                for (let i = 0; i < classAnimation.length; i++) {
                    if (i == 2) {
                        setTimeout(() => {
                            bookShopNav.classList.toggle("d-none");
                        }, 370);
                    }
                    else {
                        bookShopNav.classList.toggle(classAnimation[i]);
                    }
                }
            }
        }, 1000);
    });
})();
//# sourceMappingURL=script.js.map