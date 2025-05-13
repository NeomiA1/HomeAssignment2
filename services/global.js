

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-dark");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
           const isDark = body.classList.toggle("dark-mode");

            if (isDark) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const navLink = document.querySelectorAll(".nav-links a")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLink.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});

function calculator(event) {
    event.preventDefult();

    const projectName = document.getElementById("projectName").ariaValueMax;
}



