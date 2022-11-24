const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => num * 2);

// MAP
const mapArray = array.map((num) => {return num * 2});
console.log("map", mapArray);

// FILTER
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// REDUCE
const reduceArray = array.reduce((accumulator, num) => { return accumulator + num }, 10);
console.log('reduce', reduceArray);