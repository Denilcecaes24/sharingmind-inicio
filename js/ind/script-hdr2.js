const hamburger2 = document.querySelector(".hamburger2");
    const navMenuMobile2 = document.querySelector(".nav-menu-mobile2");

    hamburger2.addEventListener("click", () => {
        hamburger2.classList.toggle("active");
        navMenuMobile2.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", e => {
        e.preventDefault(); // Prevenir la acción por defecto
        hamburger2.classList.remove("active");
        navMenuMobile2.classList.remove("active");

        // Desplazamiento suave
        const targetId2 = e.currentTarget.getAttribute("href").substring(1);
        const targetSection2 = document.getElementById(targetId2);

        window.scrollTo({
            top: targetSection2.offsetTop,
            behavior: "smooth"
        });
    }));