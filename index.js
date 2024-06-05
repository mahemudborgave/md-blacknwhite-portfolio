let hamb = document.querySelector(".hamb");
let navLinks = document.querySelector(".header ul");
let body = document.querySelector("body");
let anchorInUl = document.querySelectorAll(".header ul a");

console.log(hamb);
console.log(navLinks);
console.log(body);

hamb.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
});

anchorInUl.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("visible");
  });
});
