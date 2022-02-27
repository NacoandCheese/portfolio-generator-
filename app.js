// const profileDataArgs = process.slice(2);

const inquirer = require("inquirer")

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


// // Array that holds the user command line argument.
// const profileDataArgs = process.argv.slice(2);

// console.log(profileDataArgs);

// //Extracted arguments stored into variables. This is called an Array Index expression.
// const [name, github] = profileDataArgs;

// console.log(name, github);



//Inquirer can recieve a question object with properties like "type, name, message".
//Prompt user function so that it can be invoked on demand within the flow of the application.
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};




const promptProject = portfolioData => {
    // If theres no 'projects' array property, create one.
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }
    console.log (`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            //confirm 'type' question is a Boolean that can recieve Yes or No (true or false) answer. 
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confrimAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};
 
//Chains the function call using .then() to control the sequence of apps flow.
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });


// // the require statment is a built in function thats globally available in Node.js. Allows app.js to access the fs modules functions through the fs assignment
// const fs = require('fs');
// //This statement the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js
// const generatePage = require('./src/page-template');



// //variable for generatePage function
// const pageHTML = generatePage(name, github);




// //File system function. 'index.html' is the file name that will be created
// // generatePage(name,github) is the data thats being written: the HTML template
// // err => is the call back function that will handle any errors as well as a success message.
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     //success statment that directs users to inspect the newly created file
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
