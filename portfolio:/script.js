const projects = document.querySelectorAll(".project");

projects.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});