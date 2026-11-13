
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.classList.toggle("open", isOpen);
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close menu when clicking outside it
    document.addEventListener("click", function (event) {
        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


// =================================
// BLUEPEAK CONCEPT - ABOUT PAGE
// =================================

document.addEventListener("DOMContentLoaded", () => {

    // Dynamic copyright year
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll reveal animations
    const aboutSections = document.querySelectorAll(
        ".about-hero-content, .about-hero-visual, .about-story, .mission-card, .vision-card, .value-card, .about-cta"
    );

    if ("IntersectionObserver" in window) {
        const aboutObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        aboutSections.forEach(section => {
            section.classList.add("about-reveal");
            aboutObserver.observe(section);
        });
    }

});



/* BLUEPEAK CONTACT FORM */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("clientName").value.trim();
        const email = document.getElementById("clientEmail").value.trim();
        const service = document.getElementById("projectService").value;
        const message = document.getElementById("projectMessage").value.trim();

        const whatsappMessage =
            `Hello Bluepeak Concept!\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Service: ${service}\n\n` +
            `Project Details:\n${message}`;

        const whatsappURL =
            `https://wa.me/2349043315770?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}




// =================================
// SERVICES PAGE - ENQUIRY PREFILL
// =================================

const serviceSelect = document.getElementById("projectService");

if (serviceSelect) {
    const requestedService = new URLSearchParams(
        window.location.search
    ).get("service");

    if (requestedService) {
        const matchingOption = Array.from(serviceSelect.options)
            .find(option => option.value === requestedService ||
                option.textContent.trim() === requestedService);

        if (matchingOption) {
            serviceSelect.value = matchingOption.value;
        }
    }
}




/* =========================================
   BLUEPEAK PARTNERSHIP APPLICATION
========================================= */

const partnershipForm = document.getElementById("partnerApplicationForm");

if (partnershipForm) {

    partnershipForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const partnerName = document.getElementById("partnerName").value.trim();
        const partnerEmail = document.getElementById("partnerEmail").value.trim();
        const partnerType = document.getElementById("partnerType").value;
        const partnerLocation = document.getElementById("partnerLocation").value.trim();
        const partnerExpertise = document.getElementById("partnerExpertise").value.trim();
        const partnerWebsite = document.getElementById("partnerWebsite").value.trim();
        const partnerInterest = document.getElementById("partnerInterest").value;
        const partnerMessage = document.getElementById("partnerMessage").value.trim();

        const whatsappMessage =
            `Hello Bluepeak Concept!\n\n` +
            `I am interested in exploring a partnership with Bluepeak Concept.\n\n` +
            `PARTNER DETAILS\n` +
            `Name: ${partnerName}\n` +
            `Email: ${partnerEmail}\n` +
            `Applicant Type: ${partnerType}\n` +
            `Location: ${partnerLocation}\n` +
            `Expertise / Industry: ${partnerExpertise}\n` +
            `Website / Portfolio: ${partnerWebsite || "Not provided"}\n` +
            `Partnership Interest: ${partnerInterest}\n\n` +
            `PROPOSAL\n${partnerMessage}`;

        const whatsappURL =
            `https://wa.me/2349043315770?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}

