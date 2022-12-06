// Menu Toggle
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const sideNav = document.querySelector(".nav-wrapper");

const openSideMenu = () => {
  sideNav.style.width = "100%";
}

const closeSideMenu = () => {
  sideNav.style.width = "0";
}

hamburger.addEventListener("click", openSideMenu);
closeBtn.addEventListener("click", closeSideMenu);

// const heroImgArray = [
//   "./images/product07.jpg",
//   "./images/product05.jpg",
//   "./images/product21.jpg",
//   "./images/product08.jpg",
//   "./images/product09.jpg"
// ]

// const heroAnimationContainer = document.getElementById("flip");

// for (x = 0; x < 5; x++) {
//   const slides = document.createElement("div");
//   slides.classList.add("hero-slide");
//   heroAnimationContainer.append(slides);
// }

// setInterval(heroCarouselSlide, 3000);
// for (x = 0; x < 10; x++) {
//     const slides = document.createElement("div");
//     slides.style.width = "80.8px";
//     slides.style.height = "100%";
//     slides.style.backgroundColor = "#d9d9d9";
//     slides.style.border = "solid blue";
//     slides.style.position = "absolute";
//     slides.innerText = x;
    
//     for (xi = 5; xi < x; xi++) {
//       slides.style.backgroundColor = "red";
//       // slides.style.flexBasis = "0";
//       // slides.style.order = "1";
//     }

//     for (xii = 9; xii < x; xii++) {
//       // slides.style.backgroundColor = "red";
//       // slides.style.flexBasis = "0";
//       // slides.style.order = "-1";
//       // slides.style.transition = "order 10s";
//     }
    
//     animationContainer.append(slides)
// }