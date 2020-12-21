document.getElementById("changetheme").addEventListener("click", () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
    } else {
        html.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
    }
});