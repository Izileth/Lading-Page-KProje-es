document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger-menu");
    const hamburgerPath = document.getElementById("hamburgerPath");
    const closePath = document.getElementById("closePath");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
        
        // Alterna entre os ícones
        if (menu.classList.contains("active")) {
            hamburgerPath.style.display = "none";
            closePath.style.display = "block";
        } else {
            hamburgerPath.style.display = "block";
            closePath.style.display = "none";
        }
    });

    // Fecha o menu ao clicar em um link e restaura o ícone original
    document.querySelectorAll(".menu li a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburgerPath.style.display = "block";
            closePath.style.display = "none";
        });
    });
});