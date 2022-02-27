let elBtn = document.querySelector(".header__button")
let elHeader = document.querySelector(".header")
let elBody = document.querySelector("body")

elBtn.addEventListener("click", function(){
   elHeader.classList.toggle("header--active");
   elBody.classList.toggle("body-fixed")
})