const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github
    }

    getRole(){
        return this.role = "Engineer"
    }

    getGithub() {
        return this.github
    }
}

// const Daniel = new Engineer("Daniel", 4, "dan@gmail.com", "whatever", "WellAndGood")
// console.log(Daniel.getRole())
// console.log(Daniel.getGithub())

module.exports = Engineer