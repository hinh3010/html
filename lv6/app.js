
document.addEventListener("DOMContentLoaded", () => {
    const valueProgressBar = document.querySelector(
        ".value_progress_bar"
    );
    document.addEventListener("scroll", () => {
        const scrollTop =
            document.body.scrollTop ||
            document.documentElement.scrollTop;
        const scrollHieght = document.documentElement.scrollHeight;
        const clientHieght = document.documentElement.clientHeight;

        const percentage = Math.floor(
            (scrollTop / (scrollHieght - clientHieght)) * 100
        );
        valueProgressBar.style.width = percentage + "%";
    });
});