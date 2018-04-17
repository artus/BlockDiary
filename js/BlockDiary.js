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
            else if(this.blockstack.isUserSignedIn())
            {
                this.loadData();
            }
        },
        loginClicked() {
            this.blockstack.redirectToSignIn("https://artusvranken.github.io/BlockDiary/", "https://artusvranken.github.io/BlockDiary/manifest.json", ['store_write', 'publish_data']);
        },
        logoutClicked() {
            this.blockstack.signUserOut(window.location.href);
        },
        loadData() {
            console.log("Loading data...");
            this.blockstack.getFile('blockdiary.json', { decrypt: true }).then(file => this.content = JSON.parse(file).content).catch(error => console.log(error));
        },
        saveData() {
            console.log("Saving data...");
            this.blockstack.putFile('blockdiary.json', JSON.stringify({ content: this.content }), { encrypt: true }).then(() => console.log("Diary saved.")).catch(error => console.log(error));
        },
        onTextUpdate() {
            _.debounce(this.saveData, 500);
        }
    }
});

app.checkLogin();