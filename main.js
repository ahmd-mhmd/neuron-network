function $(s) {
  return document.querySelector(s);
}
document.querySelectorAll(".project").forEach((proj) => {
  proj.addEventListener("mousemove", (e) => {
    proj.setAttribute(
      "style",
      `--x: ${
        (-2 * (e.layerY - proj.clientHeight / 2)) / proj.clientHeight
      }; --y: ${(2 * (e.layerX - proj.clientWidth / 2)) / proj.clientWidth}`
    );
  });
  proj.addEventListener("mouseleave", () => {
    proj.setAttribute("style", "--x: 0; --y: 0");
  });
  proj.addEventListener("blur", () => {
    proj.setAttribute("style", "--x: 0; --y: 0");
  });
});

$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#name").value = "";
  $("#email").value = "";
  $("#message").value = "";
});

$("#nav-toggle-btn").addEventListener("click", () => {
  $("#nav-wrapper").classList.toggle("open-burger");
});
