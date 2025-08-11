document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-value");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const prefix = counter.getAttribute("data-prefix") || "";
        let count = 0;
        const speed = target / 100; // speed of counting

        function updateCounter() {
            if (count < target) {
                count += speed;
                counter.textContent = prefix + Math.floor(count).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = prefix + target.toLocaleString();
            }
        }

        updateCounter();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-value");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const prefix = counter.getAttribute("data-prefix") || "";
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;
        const speed = target / 100;

        function updateCounter() {
            if (count < target) {
                count += speed;
                counter.textContent = prefix + Math.floor(count) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = prefix + target + suffix;
            }
        }

        updateCounter();
    });
});
