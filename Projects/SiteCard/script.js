function toggleDetails(element) {
    const details = element.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        element.querySelector('.arrow').textContent = "►";
    } else {
        details.style.display = "block";
        element.querySelector('.arrow').textContent = "▼";
    }
}
