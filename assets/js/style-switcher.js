const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

//scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style.switcher").classList.remove("open");
    }
})

// tema warna
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled","true");
        }
    })
}

// mode malam dan terang
const dayNight = document.querySelector(".day-night");

        // Add initial classes on load
        window.addEventListener("load", () => {
            const icon = dayNight.querySelector("i");
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
            } else {
                icon.classList.add("fa-moon");
            }
        });

        // Toggle classes on click
        dayNight.addEventListener("click", () => {
            const icon = dayNight.querySelector("i");
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
            document.body.classList.toggle("dark");
        });