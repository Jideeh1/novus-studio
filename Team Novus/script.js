// Comments just in case someone snoop on my code through inspect element
console.log("If you're here to snoop on my messy code, reconsider before your head starts hurting.\nSeriously tho, stop. If you just want to take some snippets or look at the whole code, it's available in my github.")
console.log("Github Link: https://github.com/Jideeh1/novus-studio")
console.log("It's also hosted on netlify, but I forgot the link so eh.")
console.log("Just don't complain when you see how messy the code is ./.")
console.log("Sincerely, yours truly --Jideeh")
window.onscroll = showNav;

function showNav() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.backdropFilter = "blur(10px)";
        document.getElementById("nav").style.zIndex = "5";
        console.log("Scroll Effect is active") //debugging line

    }
    else {
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.zIndex = "3";
    }
}

function logoRefresh() {
    window.location.reload()
    console.log("Logo Refresh has been clicked.") //debugging line
}

function seeMore() {
    const profiles = document.querySelectorAll(".profile");


    const areProfilesVisible = profiles[0].style.display === "flex";
    profiles.forEach(profile => {
        profile.style.display = areProfilesVisible ? "none" : "flex";
    });

    const arrow = document.querySelector(".arrow");
    arrow.style.transform = areProfilesVisible ? "rotate(0deg)" : "rotate(450deg)";
    console.log("See more button has been pressed."); //ALWAYS- ALWAYS PUT A DEBUG LINE!
}
