const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

// app.use((req, res, next) => {
//     console.log('<h1>HELLOOOO</h1>');
//     next();
// })

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/:id', (req,res) => {
//     // console.log(req.query);
//     console.log(req.params);
//     res.status(404).send("not found");
// })

// app.get('/profile', (req,res) => {
//     res.send("getting profile");
// })

// app.post('/profile', (req,res) => {
//     console.log(req.body);
//     const user = {
//         name: 'Sally',
//         hobby: 'Soccer'
//     }
//     res.send('success');
// })

app.listen(3000);

// Just a heads up that in the next lecture 
// I am using req.header inside of a console.log to retrieve the header data in a GET route. 
// Depending on which version of express.js you use, (a more recent version has changed the syntax) it now is req.headers. 
// req.header will only return the function declaration.

