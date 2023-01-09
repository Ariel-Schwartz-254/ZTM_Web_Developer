const fs = require('fs');

let instructions = '';
let currentFloor = 0;

fs.readFile('./input.txt', (err, data) => {
    console.time("Ariel's time:");
    if (err) {
        console.log(err);
    }
    instructions = data.toString();
    let enteredBasementAt = 0;
    let enteredBasement = false;

    for (let i=0; i < instructions.length; i++) {
        if (instructions[i] === '(') {
            currentFloor++;
        } else if (instructions[i] === ')') {
            currentFloor--;
        }

        if (!enteredBasement && currentFloor === -1) {
            enteredBasementAt = i + 1;
            enteredBasement = true;
        }

    };
    console.log("First basement trip:", enteredBasementAt);
    console.log("Santa's final floor:", currentFloor);
    console.timeEnd("Ariel's time:");
});

console.log('outside', currentFloor);