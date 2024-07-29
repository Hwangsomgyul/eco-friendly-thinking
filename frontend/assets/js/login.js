document.getElementById('social-btn').addEventListener('click', function() {
    if (Kakao.Auth.getAccessToken()) {
        performLogin();
    } else {
        // If there's no token, perform login
        performLogin();
    }
});

function performLogin() {
    Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender',
        success: function(authObj) {
            console.log(authObj);
            localStorage.setItem('kakaoToken', authObj.access_token);
            Kakao.API.request({
                url: '/v2/user/me',
                success: function(res) {
                    console.log(res);
                    localStorage.setItem('userName', res.properties.nickname);
                    window.location.href = 'mainPage.html';
                }
            });
        },
        fail: function(err) {
            console.error(err);
        }
    });
}
