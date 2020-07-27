// page refresh
function createAcc() {
    window.location.replace("../templates/createAcc.html");
}

function help() {
    window.location.replace("../templates/contact.html");
}

function home() {
    window.location.replace("../templates/main.html");
}

function signIn() {
    window.location.replace("../templates/sign-in.html");
}

function blog() {
    window.location.replace("../templates/blog.html");
}





//auto move
const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slideshowImages[currentImageCounter].style.display = "none";
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
}