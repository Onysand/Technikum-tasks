let mainImageElement;
let currentImage = 1

window.onload = () => {
    mainImageElement = document.getElementById("mainImage");
    
    document.getElementById("nextButton").addEventListener('click', nextImage)
    document.getElementById("prevButton").addEventListener('click', prevImage)
}

function nextImage() {
    currentImage = currentImage >= 7 ? 1 : currentImage + 1;
    updateImage();
}

function prevImage() {
    currentImage = currentImage <= 1 ? 7 : currentImage - 1;
    updateImage();
}

function updateImage() {
    // mainImageElement.src = currentImage + '.jpg';
    mainImageElement.setAttribute('src', `${currentImage}.jpg`)
}