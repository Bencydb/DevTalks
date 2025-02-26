document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Check if user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    // If a theme is saved, apply it to the body
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeToggle.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode");

        // Save the current theme in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
