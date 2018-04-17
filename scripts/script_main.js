// navigation bar - responsive navbar open
function navopenFunction() {
    var x = document.getElementById("pagenavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

    var open = document.getElementById("opennavicon");
    var close = document.getElementById("closenavicon");
    if (open.className === "activeicon") {
      close.className = "activeicon";
      open.className = "";
    } else {
      close.className = "";
      open.className = "activeicon";
    }
}

// navigation bar - sticky navbar
var hasScrolled = false;
var topnavbar;
var navbaroffset;
var firstpageelement;
function stickynavFunction() {
  if (hasScrolled) {
    if (window.pageYOffset >= navbaroffset) {
      topnavbar.classList.add("sticky");
      firstpageelement.classList.add("navpadding");
    } else {
      topnavbar.classList.remove("sticky");
      firstpageelement.classList.remove("navpadding");
    }
  } else {
    topnavbar = document.getElementById("nav");
    navbaroffset = topnavbar.offsetTop;
    firstpageelement = document.getElementById("firstelement");
    hasScrolled = true;
  }
}

// show-hide togglediv
function showhideFunction() {
    var x = document.getElementById("togglediv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
