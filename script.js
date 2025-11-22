const container = document.querySelector(".page-container");

const pages = document.querySelectorAll(".page");

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  pages.forEach((page) => {
    page.classList.toggle("active");
  });
});
