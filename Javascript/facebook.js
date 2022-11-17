var database = [{
    username: "schwartz254",
    password: "12345",
    },
    {
        username: "sally",
        password: "123",
    },
    {
         username: "ingrid",
        password: "777",
    },
];
var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning",
    },
    {
        username: "Sally",
        timeline: "Javascript is so cooooooool!",
    },
    {
        username: "bob",
        timeline: "I hate Tuesdays...",
    },
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username,password)) {
        console.log(newsfeed);
    } else {
        alert("Incorrect username/password!");
    }
}

var userNamePrompt = prompt("Please enter username?");
var passwordPrompt = prompt("Please enter password:");

// function signIn(user, pass) {
//     if (user === database[0].username && 
//         pass === database[0].password) {
//             console.log(newsfeed);
//     } else {
//         alert("Incorrect username/password!");
//     }
// }

signIn(userNamePrompt, passwordPrompt);