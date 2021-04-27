const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

let array = [new Manager('Bud', 123751, 'bud@gmail.com', 'Manager', 1935832485),
    new Engineer('Dud', 129385,' dud@askjeeves.com', 'Engineer', 'DudRox24')]

console.log(array)

let lastThing = ""

let teamAssembler = function(teamArray) {
    console.log("Team:", teamArray);
    let cardDiv = ""
    
    for (let i = 0; i < teamArray.length; i++) {
        let role = teamArray[i].role
        if (role === "Manager") {
            let addOn = "Office number: "
            let thing = toString(teamArray[i].officeNum)
            const lastThing = addOn + thing;
            return lastThing
        } 
        if (role === "Engineer") {
            let addOn = "Github account: "
            let thing = `<a href='http://www.github.com/${teamArray[i].github}>${teamArray[i].github}</a>`;
            const lastThing = addOn + thing
            return lastThing
        } 
        if (role === "Intern") {
            let addOn = "Intern's School: "
            let thing = teamArray[i].school
            const lastThing = addOn + thing
            return lastThing
        }

        let userName = teamArray[i].name
        let userId = teamArray[i].id
        let userEmail = teamArray[i].email
        let userRole = teamArray[i].role

        cardDiv += `
        <div class="card col" style="width: 18rem;">
            <div class="card body card-header">
                <h5 class="card-title">${userName}</h5>
                <h6 class="card-subtitle nb-2 text-muted">${userRole}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: <a href=mailto: ${userEmail}>${userEmail}</a></li>
                <li class="list-group-item">Employee ID: ${userId}</li>
                <li class="list-group-item">${lastThing}</li>
            </ul>
        </div>
        `

        const completeCode = combineCode(cardDiv)
        return completeCode
    }

    
}

function combineCode(cardCode) {
    const baseHTMLStart = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale-1.0">
        <title>Meet Our Team!</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    </head>

    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">Meet The Team</span>
            </div>
        </nav>

        <main class="container">
            <div class="row">
                ${cardCode}
            </div>
    </body>
    `
    return baseHTMLStart
}

teamAssembler(array)
