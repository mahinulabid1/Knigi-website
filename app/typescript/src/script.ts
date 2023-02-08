let hambar:any = document.querySelector(".dekstop-ham-container");
let mobile_navigation:any = document.querySelector(".nav-in-ham");
let mobile_navClose:any = document.getElementById("close-nav-in-ham");

// mobile navigation bar 

let classAnimation:string[] =["slideDown", "slideUp", "d-none"];
hambar.addEventListener("click", ()=>{
    for(let i =0; i < classAnimation.length; i++){
        mobile_navigation.classList.toggle(classAnimation[i]);
    }
});

mobile_navClose.addEventListener("click", ()=>{
    for(let i =0; i < classAnimation.length; i++){
        if(i==2){
            setTimeout(() => {
                mobile_navigation.classList.toggle("d-none"); 
            }, 370);
        }else{
            mobile_navigation.classList.toggle(classAnimation[i]);
        }
    }
});



