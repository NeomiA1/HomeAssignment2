document.addEventListener("DOMContentLoaded", () => {
    const navLink = document.querySelectorAll(".nav-links a")
    const currentPage = window.location.pathname.split("/").pop();

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

