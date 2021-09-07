class App {
    constructor() {
        this.$usernameInput = document.querySelector('#username-input');
        this.$resultContainer = document.querySelector('#result-container');

        this.getInputData();
    }

    getInputData() {
        this.$usernameInput.addEventListener('keyup', (event) => {
            const username = event.target.value.toLowerCase();
            console.log('username:', username)
        });
    }
}

new App();