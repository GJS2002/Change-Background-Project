const btnBackground = document.querySelector(".btn-background");
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector(".modal");

btnBackground.addEventListener('click', () => {
     document.documentElement.style.setProperty('--height', '100vh');
});

btnClose.addEventListener('click', () => {
     document.documentElement.style.setProperty('--height', '0vh');
});
