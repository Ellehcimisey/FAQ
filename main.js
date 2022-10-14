let theAnswers = document.querySelectorAll(".questions-section");
theAnswers.forEach((event) => {
    event.addEventListener("click", ()=> {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    })
})
