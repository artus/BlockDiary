var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
    },
    methods: {
        loginClicked() {
            this.blockstack.redirectToSignIn();
        },
    }
});