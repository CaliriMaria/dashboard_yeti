let desktopButton = document.querySelector('#desktop-button');
let aside = document.querySelector('aside');
let main = document.querySelector('#main');

desktopButton.addEventListener('click', function(){
   aside.style.width = "250px";
   main.style.marginLeft = "16rem";
});