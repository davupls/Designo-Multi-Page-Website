const menuImage = document.querySelector(".menu-btn-mobile-image");
const menuButton = document.querySelector(".menu-btn-mobile");
let menuButtonClosed = true;

// Mobile menu variables
const mobileMenu = document.querySelector(".menu-ul-mobile");
let menuHeight = mobileMenu.offsetHeight;

// Switch mobile menu image
menuButton.addEventListener("click", function(){
    if (menuButtonClosed === true) {
        menuImage.src = "assets/shared/mobile/icon-close.svg";
        menuButtonClosed = false;
    } else {
        menuImage.src = "assets/shared/mobile/icon-hamburger.svg";
        menuButtonClosed = true;
    }
});