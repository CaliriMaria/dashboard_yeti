let desktopButton = document.querySelector('#desktop-button');
let aside = document.querySelector('.aside');
let main = document.querySelector('#main');
let closeButton = document.querySelector('#closeButton');

desktopButton.addEventListener('click', function(){
   aside.style.width = "250px";
   aside.style.transition = "0.5s";
   main.style.marginLeft = "16rem";
});

closeButton.addEventListener('click', function(){
   aside.style.width = "0px";
   main.style.marginLeft = "0";
});