export default function getUsersList() {
    const usernames = document.querySelectorAll('.username');
    let usersList = [];
    usernames.forEach(username => {
        usersList = [...usersList, username.textContent];
    });
    return usersList;
}