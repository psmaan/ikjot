const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll(".vid");
const YTPlayerPopup = document.querySelector(".youtube-player-popup iframe");

YTLinks.forEach((link) => {
    link.addEventListener("click", () => {
        YTPlayerOverlay.classList.add("active");
        let videoLink = `https://www.youtube.com/embed/${link.dataset.link}`;
        YTPlayerPopup.src = videoLink; 
    });
});

YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});