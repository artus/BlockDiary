var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
    },
    methods: {
        loginClicked() {
            const origin = window.location.origin;
            this.blockstack.redirectToSignIn(origin, origin + '/manifest.json', ['store_write']);
        },
    }
});