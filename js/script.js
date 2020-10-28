//NAVBAR TOGGLER

//FAQ ACCORDION
(function() {
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-head");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {
            const currentlyActiveAccordion = document.querySelector(".accordion-item-head.active");
            if (currentlyActiveAccordion && currentlyActiveAccordion!==accordionItemHeader) {
                currentlyActiveAccordion.classList.toggle("active");
                currentlyActiveAccordion.nextElementSibling.style.maxHeight = 0;
            }
    
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
    
})();

