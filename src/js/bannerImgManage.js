document.addEventListener("DOMContentLoaded", () => {
    const imageList = document.getElementById("imageList");

    // Handle image removal
    imageList.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove")) {
            const id = event.target.getAttribute("data-id");
            fetch(`/remove-image?id=${id}`, { method: "POST" }).then(
                (response) => {
                    if (response.ok) {
                        event.target.closest("li").remove();
                    }
                }
            );
        }
    });

    // Handle image movement
    imageList.addEventListener("click", (event) => {
        const id = event.target.getAttribute("data-id");
        if (
            event.target.classList.contains("move-up") ||
            event.target.classList.contains("move-down")
        ) {
            const direction = event.target.classList.contains("move-up")
                ? "up"
                : "down";
            fetch(`/move-image?id=${id}&direction=${direction}`, {
                method: "POST",
            }).then((response) => {
                if (response.ok) {
                    // Move item in DOM
                    const item = event.target.closest("li");
                    const sibling =
                        direction === "up"
                            ? item.previousElementSibling
                            : item.nextElementSibling;
                    if (sibling) {
                        if (direction === "up") {
                            imageList.insertBefore(item, sibling);
                        } else {
                            imageList.insertBefore(
                                item,
                                sibling.nextElementSibling
                            );
                        }
                    }
                }
            });
        }
    });
});
