// const profileDataArgs = process.slice(2);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// the require statment is a built in function thats globally available in Node.js. Allows app.js to access the fs modules functions through the fs assignment
const fs = require('fs');
//This statement the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js
const generatePage = require('./src/page-template');

// Array that holds the user command line argument.
const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

//Extracted arguments stored into variables. This is called an Array Index expression.
const [name, github] = profileDataArgs;

console.log(name, github);

//variable for generatePage function
const pageHTML = generatePage(name, github);




//File system function. 'index.html' is the file name that will be created
// generatePage(name,github) is the data thats being written: the HTML template
// err => is the call back function that will handle any errors as well as a success message.
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    //success statment that directs users to inspect the newly created file
    console.log('Portfolio complete! Check out index.html to see the output!');
});
