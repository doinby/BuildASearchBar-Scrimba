import getUsersList from "./utils/usersList.js";

class App {
    constructor() {
        this.$body = document.querySelector('body');
        this.$usernameInput = document.querySelector('#username-input');
        this.$usernamesData = document.querySelector('#usernames-data');
        this.$errorMessage = document.querySelector('#error-message');
        
        this.usersList = getUsersList();
        this.isMatched;
        this.match = '';

        this.getInputData();
    }
    
    getInputData() {
        this.$usernameInput.addEventListener('keyup', (event) => {
            const hasSearchQuery = this.$usernameInput.value.length > 0;

            // If search bar has search key, show result
            if(hasSearchQuery) {
                this.isMatched = false;
                const searchQuery = event.target.value.toLowerCase();
                
                for(let i in this.usersList) {
                    const currentUsername = this.usersList[i];

                    // Comparing seach key to database
                    if(searchQuery === currentUsername.toLowerCase()) {
                        this.isMatched = true;
                        this.match = currentUsername;
                    }
                }
                this.render();
            }
        });
    }

    render() {
        // If match found, show matched username
        if (this.isMatched) {
            this.$errorMessage.style.display = "none";
            this.$body.classList.remove("error");
            this.$body.classList.add('success');
            this.$usernamesData.innerHTML = `<li class="username">${this.match}</li>`;
        } 

        // If not, clear search result and show error message
        else if(this.isMatched = 'false') {
            this.$errorMessage.style.display = 'block';
            this.$body.classList.remove("success");
            this.$body.classList.add("error");
            this.$usernamesData.innerHTML = '';
        }
    }
}

new App();