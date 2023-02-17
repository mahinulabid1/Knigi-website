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
    let duration = 0;
    let selectorArr = [shopButton, bookShopnavClose];
    let x;
    for (let i = 0; i < selectorArr.length; i++) {
        selectorArr[i].addEventListener("mouseenter", () => {
            let eventEnterTime = Date.now();
            x = setInterval(() => {
                let eventDurationCounter = Date.now();
                duration = eventDurationCounter - eventEnterTime;
                console.log(duration);
            }, 200);
        });
        selectorArr[i].addEventListener("mouseleave", () => {
            clearInterval(x);
            duration = 0;
        });
    }
    selectorArr[0].addEventListener("mouseenter", () => {
        setTimeout(() => {
            if (duration > 400) {
                bookShopNav.classList.remove('d-none');
                bookShopNav.classList.remove("slideUp");
                bookShopNav.classList.add("slideDown");
            }
        }, 500);
    });
    selectorArr[1].addEventListener("mouseenter", () => {
        console.log("shop nav close");
        setTimeout(() => {
            if (duration > 200) {
                bookShopNav.classList.add("slideUp");
                bookShopNav.classList.remove("slideDown");
                setTimeout(() => {
                    bookShopNav.classList.add('d-none');
                }, 390);
            }
        }, 300);
    });
})();
(() => {
})();
//# sourceMappingURL=script.js.map