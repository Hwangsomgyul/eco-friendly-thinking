document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('.logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            if (Kakao.Auth.getAccessToken()) {
                Kakao.Auth.logout(function() {
                    console.log('Logout successful');
                    localStorage.clear();
                    window.location.href = '../public/firstPage.html';
                });
            } else {
                localStorage.clear();
                window.location.href = '../public/firstPage.html';
            }
        });
    } else {
        console.error("Logout button not found.");
    }
});
