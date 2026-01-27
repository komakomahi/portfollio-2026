console.log("menu js loaded");

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = sideMenu.querySelectorAll("a");
const body = document.body;

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
  body.classList.toggle("menu-open");

  if (sideMenu.classList.contains("active")) {
    menuBtn.textContent = "close";
  } else {
    menuBtn.textContent = "menu";
  }
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    body.classList.remove("menu-open");
    menuBtn.textContent = "menu";
  });
});
