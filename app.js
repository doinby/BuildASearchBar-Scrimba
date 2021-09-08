import getUsersList from "./utils/usersList.js";

class App {
    constructor() {
        this.$usernameInput = document.querySelector('#username-input');
        this.$usernamesData = document.querySelector('#usernames-data');
        this.$errorMessage = document.querySelector('#error-message');
        
        this.usersList = getUsersList();
        this.isMatched = false;
        this.hasSearchQuery = false;
        this.match = '';
        
        this.getInputData();
    }
    
    getInputData() {
        this.$usernameInput.addEventListener('keyup', (event) => {
            const searchQuery = event.target.value.toLowerCase();
            console.log('searchQuery:', searchQuery)
            
            for(let i in this.usersList) {
                if(searchQuery === this.usersList[i].toLowerCase()) {
                    this.isMatched = true;
                    this.match = this.usersList[i];
                }
            }
            this.render();
        });
    }
    
    render() {
        if (this.isMatched) {
          this.$usernamesData.innerHTML = `<li class="username">${this.match}</li>`;
        } else {
            this.$errorMessage.style.display = 'block';
            this.$usernamesData.innerHTML = '';
        }
    }
}

new App();