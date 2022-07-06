if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    
var myNav = document.querySelector("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
}};

