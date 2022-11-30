// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]

// Find 2 numbers that combined equal the target number
    // iterate over array until 2 numbers are found.
        // start with the first number in the array.
        //Iterate over subsequent numbers in the array. 
            //check if any of the subsequent numbers combine with it into the target:
            // if YES, return the two numbers.
        // if combo is not found during iteration, compare the second number to subsequent numbers.
    // if no number combination is found, notify the user.

const answer = (array, target) => {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) === target) {
                return [array[i], array[j]];
            }
        }
    }
    return `No combinations were found.`
}