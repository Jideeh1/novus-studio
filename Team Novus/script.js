window.onscroll = showNav;

function showNav() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.backdropFilter = "blur(10px)";
        document.getElementById("nav").style.zIndex = "5";

    }
    else {
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.zIndex = "3";
    }
}