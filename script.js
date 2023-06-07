let boxesEl = document.getElementById("boxes");
let aboutUsEl = document.getElementById("aboutUs")
let openPopupEl = document.getElementById("newFull")
function about(){
boxesEl.classList.add("hidden")
aboutUsEl.classList.remove("hidden")
}
let fulllScreenEL = document.getElementById("fullScreen");
function openPopup(){
   openPopupEl.classList.add("open-popup")
   fulllScreenEL.classList.add("opacti")
}
function closePopup(){
      openPopupEl.classList.remove("open-popup");
      fulllScreenEL.classList.remove("opacti")
}