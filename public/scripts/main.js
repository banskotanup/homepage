const btn = document.querySelector("#btn-theme-toggle");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"); 
    if (document.body.classList.value === "dark-theme") {
        btn.textContent = "Enable white theme";
    } else {
        btn.textContent = "Enable black theme";
    }
});

