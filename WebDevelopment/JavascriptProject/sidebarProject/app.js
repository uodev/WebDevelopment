const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBTN = document.querySelector(".close-btn");
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBTN.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
