var url = "https//artusvranken.github.io/BlockDiary/";

var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
    },
    methods: {
        checkLogin() {
            if (this.blockstack.isSignInPending()) {
                this.blockstack.handlePendingSignIn().then(function (userData) {
                    window.location = url;
                });
            }
        },
        loginClicked() {
            this.blockstack.redirectToSignIn(url, url + 'manifest.json', ['store_write']);
        },
    }
});