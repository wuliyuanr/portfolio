// ============================
// 悬停 / 点击交互（如果有 project 项）
// ============================

const projects = document.querySelectorAll(".project");

projects.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// ============================
// Sidebar（如果你以后启用 menu-toggle）
// ============================

const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}