const ENLIST_URL = "https://my.goarmy.com/?loginPg=ace";
const UNIVERSE_ID = "3541611379";

function redirectToUS() {
    window.location.replace(ENLIST_URL);
}

document.addEventListener("DOMContentLoaded", async () => {
    const playerCount = await fetchPlayerCount();
    if (serviceMembersCountElement) {
        animateCount(serviceMembersCountElement, playerCount);
    }
});

const carouselContainer = document.getElementById("carousel-container");
const images = [
    "static/propaganda01.png",
    "static/propaganda02.png",
    "static/propaganda03.png",
    "static/propaganda04.png",
    "static/propaganda05.png",
    "static/background.png"
];

images.forEach((src, index) => {
    const image = document.createElement("div");
    image.classList.add("carousel-image");
    image.style.backgroundImage = `url(${src})`;
    image.style.animationDelay = `${index * 5}s`;
    carouselContainer.appendChild(image);
});
