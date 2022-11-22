var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));

    var button = document.createElement("button");
    button.innerHTML = 'Delete';

    li.appendChild(button);
    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}

function manageTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    } else if (task.target.tagName === "BUTTON") {
        task.target.parentElement.remove();
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", manageTask)