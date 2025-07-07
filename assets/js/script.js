document.addEventListener("DOMContentLoaded", function () {
  const webBtn = document.getElementById("web-btn");
  const uiUxBtn = document.getElementById("uiux-btn");
  const webProjects = document.getElementById("web-projects");
  const uiUxProjects = document.getElementById("ui-ux-projects");
  const menuToggle = document.getElementById("menu-toggle");
  const headerMenu = document.getElementById("header-menu");


  if (webBtn && uiUxBtn && webProjects && uiUxProjects) {
    webBtn.addEventListener("click", function () {
      webBtn.classList.add("section__button--active");
      uiUxBtn.classList.remove("section__button--active");
      webProjects.style.display = "block";
      uiUxProjects.style.display = "none";
    });

    uiUxBtn.addEventListener("click", function () {
      uiUxBtn.classList.add("section__button--active");
      webBtn.classList.remove("section__button--active");
      uiUxProjects.style.display = "block";
      webProjects.style.display = "none";
    });
  }

  if (menuToggle && headerMenu) {
    menuToggle.addEventListener("click", function () {
      headerMenu.classList.toggle("show");
    });
  }
});
