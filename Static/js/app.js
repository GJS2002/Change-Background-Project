const btnBackground = document.querySelector(".btn-background");
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector(".modal");
const images = document.querySelectorAll("img");
const body = document.querySelector("body");
let src;

btnBackground.addEventListener('click', () => {
     document.documentElement.style.setProperty('--height', '100vh');
});

btnClose.addEventListener('click', () => {
     document.documentElement.style.setProperty('--height', '0vh');
});

images.forEach(img => {
     img.addEventListener('click', e => {
          let img = e.currentTarget;
          images.forEach(img => img.classList.remove("active"));
          img.classList.add("active");
          src = img.src;
          body.style.backgroundImage = `url(${src})`;
     });
});

