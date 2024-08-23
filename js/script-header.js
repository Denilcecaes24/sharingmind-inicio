const hamburger = document.querySelector(".hamburger");
    const navMenuMobile = document.querySelector(".nav-menu-mobile");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenuMobile.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", e => {
        e.preventDefault(); // Prevenir la acción por defecto
        hamburger.classList.remove("active");
        navMenuMobile.classList.remove("active");

        // Desplazamiento suave
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }));