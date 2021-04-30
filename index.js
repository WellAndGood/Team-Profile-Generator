const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = []

newTeamMember()
function newTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Add another employee, or stop adding employees",
            choices: [
                "Add a new Manager",
                "Add a new Engineer",
                "Add a new Intern",
                "Stop adding employees"
            ]
        }
    ]).then((data) => {
        const roleToChoose = data.newEmployee;

        switch(roleToChoose) {
            case "Add a new Manager":
                managerAdd()
                break;
            case "Add a new Engineer":
                engineerAdd()
                break;
            case "Add a new Intern":
                internAdd()
                break;
            case "Stop adding employees":
                teamAssembler(teamMembers)
                break
        }
    })
}


function managerAdd() {
    inquirer.prompt([
        {
            type: "input",
            name: "managersName",
            message: "Enter your manager's name:"
        },
        {
            type: "input",
            name: "managersID",
            message: "Enter your manager's ID:"
        },
        {
            type: "input",
            name: "managersEmail",
            message: "Enter your manager's email:"
        },
        {
            type: "input",
            name: "managersOfficeNumber",
            message: "Enter your manager's office phone number:"
        }
    ]).then(function(data) {
        const managerClass = new Manager(data.managersName, data.managersID, data.managersEmail, "Manager", data.managersOfficeNumber)
        teamMembers.push(managerClass)
        newTeamMember()
    })
}

function engineerAdd() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineersName",
            message: "Enter your engineer's name:"
        },
        {
            type: "input",
            name: "engineersID",
            message: "Enter your engineer's ID:"
        },
        {
            type: "input",
            name: "engineersEmail",
            message: "Enter your engineer's email:"
        },
        {
            type: "input",
            name: "engineersGithub",
            message: "Enter your engineer's Github account:"
        }
    ]).then(function(data) {
        const engineerClass = new Engineer(data.engineersName, data.engineersID, data.engineersEmail, "Engineer", data.engineersGithub)
        teamMembers.push(engineerClass)
        newTeamMember()
    })
}
function internAdd() {
    inquirer.prompt([
        {
            type: "input",
            name: "internsName",
            message: "Enter your intern's name:"
        },
        {
            type: "input",
            name: "internsID",
            message: "Enter your intern's ID:"
        },
        {
            type: "input",
            name: "internsEmail",
            message: "Enter your intern's email:"
        },
        {
            type: "input",
            name: "internsSchool",
            message: "Enter your intern's school:"
        }
    ]).then(function(data) {
        const internClass = new Intern(data.internsName, data.internsID, data.internsEmail, "Intern", data.internsSchool)
        teamMembers.push(internClass)
        console.log(internClass)
        newTeamMember()
    })
}

let teamAssembler = function(teamArray) {
    console.log("Team:", teamArray);
    let lastThing = []
    let cardDiv = ""
    
    for (let i = 0; i < teamArray.length; i++) {
        console.log(teamArray[i])
        let role = teamArray[i].role
        let userRole = ""
        console.log("role: " + role)
        if (role === "Manager") {
            let addOn = "Office number: "
            let thing = teamArray[i].getOfficeNumber()
            lastThing = addOn + thing;
            console.log(lastThing)
            userRole = `${role}  <i class="fas fa-tasks"></i>`
        } 
        if (role === "Engineer") {
            let addOn = "Github account: "
            let thing = `<a href="http://www.github.com/${teamArray[i].github}">${teamArray[i].github}</a>`;
            lastThing = addOn + thing
            console.log(lastThing)
            userRole = `${role}  <i class="fas fa-cogs"></i>`
        } 
        if (role === "Intern") {
            let addOn = "Intern's School: "
            let thing = teamArray[i].school
            lastThing = addOn + thing
            console.log(lastThing)
            userRole = `${role}  <i class="fas fa-school"></i>`
        }

        // console.log("Last thing: " + lastThing)

        let userName = teamArray[i].name
        let userId = teamArray[i].id
        let userEmail = teamArray[i].email

        cardDiv += `
        <div class="card col unit circle m-2">
            <div class="card body card-header m-2 bg-primary text-white">
                <h5 class="card-title text-center">${userName}</h5>
                <h6 class="card-subtitle nb-2 text-center text-center">${userRole}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-center">Email: <a href="mailto:${userEmail}">${userEmail}</a></li>
                <li class="list-group-item text-center">Employee ID: ${userId}</li>
                <li class="list-group-item text-center">${lastThing}</li>
            </ul>
        </div>
        `
    }
    const completeCode = combineCode(cardDiv)
    console.log(completeCode)
    createWebsite(completeCode)
    return completeCode
}

function combineCode(cardCode) {
    const baseHTML = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale-1.0">
        <title>Meet Our Team!</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    </head>

    <body>
        <nav class="jumbotron jumbotron-fluid p1 text-center">
            <div class="navbar-header mx-auto">
                <span class="navbar-brand mb-0 h1"><h1>Meet The Team!</h1></span>
            </div>
        </nav>

        <main class="container">
            <div class="row flexer">
                ${cardCode}
            </div>
    </body>
    `
    return baseHTML
}

function createWebsite(htmlCode) {
    fs.writeFile('./dist/team.html', htmlCode, function(error) {
        if (error) {
            throw error;
        }
    })
}