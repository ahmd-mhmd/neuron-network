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

document.querySelectorAll("section").forEach((s) => {
  s.addEventListener("click", () => {
    $("#nav-wrapper").classList.remove("open-burger");
  });
});

$("footer").addEventListener("click", () => {
  $("#nav-wrapper").classList.remove("open-burger");
});

$("#nav-toggle-btn").addEventListener("click", () => {
  $("#nav-wrapper").classList.toggle("open-burger");
});

let angle = 0;

function projSpin(sign) {
  spinner = document.querySelector("figure");
  if (!sign) {
    angle = angle + 60;
  } else {
    angle = angle - 60;
  }
  spinner.setAttribute(
    "style",
    "-webkit-transform: rotateY(" +
      angle +
      "deg); -moz-transform: rotateY(" +
      angle +
      "deg); transform: rotateY(" +
      angle +
      "deg);"
  );
}


const blob = document.getElementById("blob") 

document.querySelectorAll("section").forEach(s => {

	s.addEventListener("mousemove", (e) => {
		//if(e.pageY + 200 < document.body.clientHeight) 
		blob.style.top = `${e.pageY - 100}px`;
		blob.style.left = `${e.pageX - 100}px`;
		blob.setAttribute("data-y", `${e.screenY}`)
	})

})

window.addEventListener("scroll", () => {
	blob.style.top = `${window.scrollY + parseInt(blob.getAttribute("data-y")) - 200}px`
});

