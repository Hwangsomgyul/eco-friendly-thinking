document.addEventListener("DOMContentLoaded", () => {
    fetch('../public/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            const homeClick = document.querySelector('.home');
            homeClick.addEventListener('click', () => {
                location.href = '../public/mainPage.html';
            });
        })
        .catch(err => console.error('Error loading header:', err));

    fetch('../public/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.error('Error loading footer:', err));
});
