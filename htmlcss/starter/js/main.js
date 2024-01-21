// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-content");

    faqs.addEventListener("click", (e) => {
        const groupHeader = e.target.closest(".faq-group-header");

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector(".faq-group-body");
        const icon = groupHeader.querySelector("i");

        // toggle the accordion
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");

        // toggle body visibility
        groupBody.classList.toggle("open");

        // hide other accordion bodies
        faqs.forEach((faq) => {
            if (faq !== groupBody) {
                faq.classList.remove("open");
            }
        });
    });
});
