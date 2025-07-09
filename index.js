const ENLIST_URL = "https://my.goarmy.com/?loginPg=ace";
const UNIVERSE_ID = "3541611379";
const PLAYER_COUNT_ENDPOINT = "https://roproxy.com/games/v1/games?universeIds=";
const serviceMembersCountElement = document.getElementById("service-members-count");

function redirectToUS() {
    window.location.replace(ENLIST_URL);
}

async function fetchPlayerCount() {
    try {
        const response = await fetch(PLAYER_COUNT_ENDPOINT + UNIVERSE_ID);
        if (response.ok) {
            const data = await response.json();
            return data.data[0]?.playing ?? 0;
        } else {
            console.error("Failed to get player count! Status:", response.status);
            return 0;
        }
    } catch (error) {
        console.error("An error occurred while fetching player count:", error);
        return 0;
    }
}

function animateCount(element, targetCount) {
    let currentCount = 0;
    const duration = 1500; // ms
    const stepTime = 50; // ms
    const increment = targetCount / (duration / stepTime);

    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            clearInterval(timer);
            currentCount = targetCount;
        }
        element.textContent = Math.floor(currentCount).toLocaleString();
    }, stepTime);
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
