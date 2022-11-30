// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Split one large array into ordered subaray
    // sort elements in large array in ascending order.
    // add each element into a result array based on the following:
        // if lone element: append element into result array as is.
        //if NOT lone element:

            // group equal consecutive numbers into a sub array.
                // calculate how many consecutive numbers current element has
                    // set initial number to 1.
                    // iterate over array:
                    // from current index, check if next number is equal to our number:
                        // if YES, add 1 to initial number; add 1 to current index; continue iterating.
                        // if NO, stop iterating.
                // create an array with the same amount of elements
                
            // append subarray to result array
            // add the number of consecutive elements to iteration counter (unless we can access the counter inside the function)
            // continue iterating.
                
    // return the result array.

const createSubarray = (element, num) => {
    return Array(num).fill(element);
}

const calculateConsecutive = (array, idx) => {
    consecutive_nums = 1;
    while (array[idx] === array[idx + 1]) {
        consecutive_nums++;
        idx++;
    }
    return consecutive_nums;
}

const cleanRoom = (array) => {
    let sorted_array = array.sort((a,b) => a - b);
    let result_array = [];
    let i = 0;

    while (i < sorted_array.length) {
        if (sorted_array[i] === sorted_array[i + 1]) {
            consecutive_element_amount = calculateConsecutive(sorted_array, i);
            sub_array = createSubarray(sorted_array[i], consecutive_element_amount);

            result_array.push(sub_array);
            i += consecutive_element_amount;
        } else {
            result_array.push(sorted_array[i]);
            i++;
        }
    }
    return result_array;
}