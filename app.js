
// Start  menu toggle 

let menuIcon = document.querySelector(".header .fa-bars");
let closeIcon = document.querySelector(".header .fa-xmark");
let list = document.querySelector(".header .links ul");


menuIcon.addEventListener("click",function(){
list.style.display="block";
menuIcon.style.display="none";
});

closeIcon.addEventListener("click",function(){
    list.style.display="none";
    menuIcon.style.display="block";
});

function removLink() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 767) {
        // Your existing code
        list.style.display = "none";
        menuIcon.style.display = "block";
    }
}
// End menu toggle 


//Copyright 
const currentYear = new Date().getFullYear();

// Update the copyright year dynamically
const copyrightYearElement = document.querySelector(".copyright");
if (copyrightYearElement) {
    copyrightYearElement.textContent = `© Alghoul ${currentYear}`;
}

