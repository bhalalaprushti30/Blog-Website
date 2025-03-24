document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode was enabled before and apply it
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Ensure dark mode toggle exists before adding event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            // Store preference in localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }

    // Contact Form Submission Handling
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});
