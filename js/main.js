// menu start
let section = document.querySelectorAll(".one");
let btn = document.querySelector("#menu-bar");
let menu = document.querySelector(".navbar");
section.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
    menu.classList.toggle("active");
    btn.classList.toggle("fa-times");
  });
});

// menu toggle
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  btn.classList.toggle("fa-times");
});

window.onscroll = function () {
  menu.classList.remove("active");
  btn.classList.remove("fa-times");
};
// menu end

// start home
let slides = document.querySelectorAll(".slide-container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;

next.addEventListener("click", () => {
  document.querySelector(".slide-container.active").classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});

prev.addEventListener("click", () => {
  document.querySelector(".slide-container.active").classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});

// end home

// start featured
document.querySelectorAll(".featured-image-1").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    let src = image_1.getAttribute("src");
    document.querySelector(".big-image-1").src = src;
  });
});

document.querySelectorAll(".featured-image-2").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    let src = image_1.getAttribute("src");
    document.querySelector(".big-image-2").src = src;
  });
});

document.querySelectorAll(".featured-image-3").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    let src = image_1.getAttribute("src");
    document.querySelector(".big-image-3").src = src;
  });
});
// end featured
