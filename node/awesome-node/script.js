const fs = require('fs');

fs.readFile('./hello.txt', (err,data) => {
    console.time('funchallange');

    if (err) {
        console.log('errrrorrrrr');
    }
    console.log('1', data.toString());
    console.timeEnd('funchallange');
})

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// });

// WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Inception');
// })
