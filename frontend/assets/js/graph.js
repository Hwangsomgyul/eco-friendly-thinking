document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');

    function animateBars() {
        bars.forEach(bar => {
            const value = parseInt(bar.dataset.value);
            const maxDataValue = 12000;
            const barHeightPercentage = (value / maxDataValue) * 100;

            bar.style.height = '0';

            setTimeout(() => {
                bar.style.height = barHeightPercentage + '%';
                bar.classList.add('fade-in', 'animate');
            }, 1000);
        })
    }

    // Initial call
    animateBars();
});