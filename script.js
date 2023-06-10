const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("nav ul li a");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(function (section, index) {
    var top = section.offsetTop;
    var height = section.clientHeight;

    if (scrollTop >= top && scrollTop < top + height) {
      navLinks[index].classList.add("active");
    } else {
      navLinks[index].classList.remove("active");
    }
  });

  if (scrollTop === 0) {
    navLinks[0].classList.add("active");
    navLinks[1].classList.remove("active");
  }
});
