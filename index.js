const ENLIST_URL = "https://my.goarmy.com/?loginPg=ace";

function redirectToUS() {
    window.location.replace("https://my.goarmy.com/?loginPg=ace");
}

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
