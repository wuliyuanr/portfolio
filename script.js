const projects = document.querySelectorAll(".project");

projects.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

document.getElementById("menuBtn").onclick = function () {
    document.getElementById("navMenu").classList.toggle("active");
};