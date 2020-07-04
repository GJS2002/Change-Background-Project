const btnBackground = document.querySelector(".btn-background");
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector(".modal");
const images = document.querySelectorAll("img");
const body = document.querySelector("body");
let src;

btnBackground.addEventListener('click', () => {
     console.log(window.innerHeight);
     if(window.innerHeight === 1366){
          document.documentElement.style.setProperty('--width', '50vw');
     } else if(window.innerWidth > 1000){
          document.documentElement.style.setProperty('--width', '30vw');
     }
      else {
          document.documentElement.style.setProperty('--height', '100vh');
     }
     
});

btnClose.addEventListener('click', () => {
     if(window.innerWidth > 1000){
          document.documentElement.style.setProperty('--width', '0vw');
          console.log('yeah');
          
     } else {
          document.documentElement.style.setProperty('--height', '0vh');
     }
     
});

images.forEach(img => {
     img.addEventListener('click', e => {
          let img = e.currentTarget;
          images.forEach(img => img.classList.remove("active"));
          img.classList.add("active");
          src = img.src;
          body.style.background = `center / cover no-repeat url(${src})`;
     });
});

