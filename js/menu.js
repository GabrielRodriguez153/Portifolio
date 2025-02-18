document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".itens");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest("nav")) {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });
});
