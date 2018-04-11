var url = "https://artusvranken.github.io/BlockDiary/";

var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
    },
    methods: {
        checkLogin() {
            if (this.blockstack.isSignInPending()) {
                console.log("Handling login.");
                this.blockstack.handlePendingSignIn().then(function (userData) {
                    window.location = "https://artusvranken.github.io/BlockDiary/";
                });
            }
        },
        loginClicked() {
            this.blockstack.redirectToSignIn("https://artusvranken.github.io/BlockDiary/", "https://artusvranken.github.io/BlockDiary/manifest.json", ['store_write']);
        },
    }
});