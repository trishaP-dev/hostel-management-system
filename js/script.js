let navbar = document.querySelector("nav");
let navbar2 = document.querySelector("nav-2");

window.addEventListener("scroll", function () {
    if (window.scrollY > 4) {
        document.body.classList.add("scrolled");
    } 
    else {
        document.body.classList.remove("scrolled");
    }
});

const images = ["images/h1.jpg", "images/h2.jpg", "images/h3.jpg", "images/h4.jpg"];
let currentIndex = 0;
const bgImage = document.getElementById("bg");
const leftBtn = document.getElementById("scroll1");
const rightBtn = document.getElementById("scroll2");

function updateImage(index) {
    bgImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextImage, 5000);

// Click event listeners
rightBtn.addEventListener("click", () => {
    nextImage();
    resetAutoSlide();
});

leftBtn.addEventListener("click", () => {
    prevImage();
    resetAutoSlide();
});

// Reset auto-slide timer on manual navigation
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 3000);
}

// Initial image setup
updateImage(currentIndex);
