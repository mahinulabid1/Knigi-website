let hambar:any = document.querySelector(".dekstop-ham-container");
let mobile_navigation:any = document.querySelector(".nav-in-ham");
let mobile_navClose:any = document.getElementById("close-nav-in-ham");

mobile_navigation.classList.remove("d-none");
hambar.addEventListener("click", ()=>{
    // console.log("hambar is clicked");
    mobile_navigation.classList.add("slideDown");
    mobile_navigation.classList.remove("slideUp");
    // mobile_navigation.style.animation="slideDown 0.4s linear";
    mobile_navigation.classList.remove("d-none");
});

mobile_navClose.addEventListener("click", ()=>{
    mobile_navigation.classList.remove("slideDown");
    mobile_navigation.classList.add("slideUp");
    setTimeout(() => {
        mobile_navigation.classList.add("d-none"); 
    }, 370);
    
});