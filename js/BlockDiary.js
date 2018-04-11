var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
        url: "https//artusvranken.github.io/BlockDiary/",
    },
    methods: {
        checkLogin() {
            if (this.blockstack.isSignInPending()) {
                this.blockstack.handlePendingSignIn().then(function (userData) {
                    window.location = this.url;
                });
            }
        },
        loginClicked() {
            this.blockstack.redirectToSignIn(this.url, this.url + 'manifest.json', ['store_write']);
        },
    }
});