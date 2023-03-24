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

$("#nav-toggle-btn").addEventListener("click", (e) => {
    $("#nav-wrapper").classList.toggle("open-burger");
});
const projects = document.querySelectorAll('.project-outer');

const projectWrapper = document.querySelector('.projects-list');

let projectWrapperWidth = projectWrapper.clientWidth;

let projectWidth = projects[0].clientWidth;

let currentProjectIndex = 0;

// Clone the projects and append them to the end of the list
const clonedProjects = Array.from(projects).map((project) => project.cloneNode(true));
clonedProjects.forEach((project) => {
    projectWrapper.appendChild(project);
});

function moveProjects() {
    const initialOffset = currentProjectIndex * -projectWidth;
    projectWrapper.style.transform = `translateX(${initialOffset}px)`;
}

function updateCurrentProjectIndex(offset) {
    const maxOffset = (projects.length - 1) * projectWidth;
    const isAtRightEdge = currentProjectIndex === projects.length - 1 && offset < 0;
    const isAtLeftEdge = currentProjectIndex === 0 && offset > 0;
    if (!isAtRightEdge && !isAtLeftEdge) {
        currentProjectIndex += offset < 0 ? 1 : -1;
    } else if (isAtRightEdge && offset < 0) {
        currentProjectIndex = 0;
    } else if (isAtLeftEdge && offset > 0) {
        currentProjectIndex = projects.length - 1;
    }
}

function moveProjectsAutomatically() {
    setInterval(() => {
        const newOffset = (currentProjectIndex + 1) * -projectWidth;
        updateCurrentProjectIndex(-1);
        moveProjects();
    }, 5000);
}

moveProjects();

moveProjectsAutomatically();

window.addEventListener('resize', () => {
    projectWrapperWidth = projectWrapper.clientWidth;
    projectWidth = projects[0].clientWidth;
    moveProjects();
});