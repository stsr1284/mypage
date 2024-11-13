function addEvent(eventType, selector, callback) {
    window.addEventListener(eventType, (event) => {
        if (!event.target.closest(selector)) return false;
        callback(event);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    addEvent("click", ".mobile_toggle_btn", (event) => {
        const html = event.target.innerHTML;
        const navContent = document.querySelector(".nav_content_container");
        navContent.classList.toggle("show");
    });
});
