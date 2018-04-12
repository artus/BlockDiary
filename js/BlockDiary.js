var url = "https://artusvranken.github.io/BlockDiary/";

var app = new Vue({
    el: "#diary-app",
    data: {
        blockstack: window.blockstack,
        content: "",
        typing: false,
        saving: false,
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
        logoutClicked() {
            this.blockstack.signUserOut(window.location.href);
        },
        loadData() {
            this.blockstack.getFile('blockdiary.json', { decrypt: true }).then(file => app.content = file.content).catch(error => console.log(error));
        },
        saveData() {
            this.blockstack.putFile('blockdiary.json', JSON.stringify({ content: this.content }), { encrypt: true }).then(() => console.log("Diary saved.")).catch(error => console.log(error));
        },
        handleTextUpdate(e) {
            if (this.blockstack.isUserSignedIn()) {
                this.typing = true;
                setTimeout(() => { this.typing = false; }, 500);
                setTimeout(() => { this.handleSave(); }, 1000);
            }
        },
        handleSave() {
            if (!this.typing) {
                this.saving = true;
                console.log("saving...");
                this.saveData();
                this.saving = false;
            }
        },
    }
});

app.checkLogin();