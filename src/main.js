let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let mobileNav = document.querySelector(".mobile-nav")


openMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu.style.display = "none"
    closeMenu.style.display = "inline"
    mobileNav.style.display = "flex"
})

closeMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu.style.display = "none"
    openMenu.style.display = "inline"
    mobileNav.style.display = "none"
})


window.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target)) {
        mobileNav.style.display = "none"
        closeMenu.style.display = "none";
        openMenu.style.display = "inline";
    }
})

window.addEventListener("resize", (e) => {
    if (window.screen.width >= "768") {
        mobileNav.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "inline";
    }
})