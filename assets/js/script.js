document.addEventListener("DOMContentLoaded", function () {
  const webBtn = document.getElementById("web-btn");
  const uiUxBtn = document.getElementById("uiux-btn");
  const webCourses = document.getElementById("web-courses");
  const uiUxCourses = document.getElementById("ui-ux-courses");

  console.log(webBtn);
  console.log(uiUxBtn);
  console.log(webCourses);
  console.log(uiUxCourses);
  

  if (webBtn && uiUxBtn && webCourses && uiUxCourses) {
    webBtn.addEventListener("click", function () {
      webBtn.classList.add("section__button--active");
      uiUxBtn.classList.remove("section__button--active");
      webCourses.style.display = "block";
      uiUxCourses.style.display = "none";
    });

    uiUxBtn.addEventListener("click", function () {
      uiUxBtn.classList.add("section__button--active");
      webBtn.classList.remove("section__button--active");
      uiUxCourses.style.display = "block";
      webCourses.style.display = "none";
    });
  }
});
