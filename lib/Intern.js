const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school
    }

    getRole(){
        return this.role = "Intern"
    }

    getSchool() {
        return this.school
    }
}

// const Daniel = new Intern("Daniel", 4, "dan@gmail.com", "whatever", "Awesome School")
// console.log(Daniel.getName())
// console.log(Daniel.getEmail())

module.exports = Intern