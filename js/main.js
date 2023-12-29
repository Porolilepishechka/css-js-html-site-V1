document.addEventListener("DOMContentLoaded", function () {
    const backgroundContainer = document.querySelector('.background-container');

    const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Fields_hr_1.JPG/1200px-Fields_hr_1.JPG', 'https://foni.club/uploads/posts/2023-02/1676732191_foni-club-p-oboi-priroda-4k-na-pk-7.jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Batad_Rice_Terraces_after_the_rain.JPG'];
    let currentImageIndex = 0;

    function changeBackground() {
        backgroundContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Call the function initially
    changeBackground();

    // Set interval to change background every 10 seconds
    setInterval(changeBackground, 10000);
});

document.querySelector('.nav-btn').addEventListener('click', function() {
    if (this.setPointerCapture) {
        this.setPointerCapture(1);
    } else if (this.setCapture) {
        this.setCapture();
    }
});
