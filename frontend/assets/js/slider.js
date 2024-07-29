document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const images = document.querySelectorAll('.image-slider');
    const imageCount = images.length;

    document.getElementById('left-arrow').addEventListener('click', function() {
        if (index > 0) {
            index--;
        }
        updateSlidePosition();
    });

    document.getElementById('right-arrow').addEventListener('click', function() {
        if (index < imageCount - 1) {
            index++;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        const offset = -index * (150 + 10); // 이미지 너비(150px) + 간격(10px)
        images.forEach(img => {
            img.style.transform = `translateX(${offset}px)`;
        });
    }
});


