const menuImage = document.querySelector(".menu-btn-mobile-image");
const menuButton = document.querySelector(".menu-btn-mobile");
let menuButtonClosed = true;

// Mobile menu variables
const mobileMenu = document.querySelector(".menu-ul-mobile");
const menuHeight = (mobileMenu.offsetHeight + 2).toString();
const negativeMenuHeight = "-" + menuHeight + "px";
mobileMenu.style.top = negativeMenuHeight;

// Switch mobile menu image
menuButton.addEventListener("click", function(){
    if (menuButtonClosed === true) {
        menuImage.src = "assets/shared/mobile/icon-close.svg";
        mobileMenu.style.top =  "0px";
        menuButtonClosed = false;
    } else {
        menuImage.src = "assets/shared/mobile/icon-hamburger.svg";
        mobileMenu.style.top = negativeMenuHeight;
        menuButtonClosed = true;
    }
});