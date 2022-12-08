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
