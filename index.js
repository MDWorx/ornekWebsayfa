// index.js

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("img");

  image.addEventListener("mouseenter", function () {
    image.classList.add("shake");
  });

  image.addEventListener("mouseleave", function () {
    image.classList.remove("shake");
  });
});
