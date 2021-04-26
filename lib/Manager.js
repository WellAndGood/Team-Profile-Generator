const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officeNum = officeNumber
    }

    getRole(){
        return this.role = "Manager"
    }

    getOfficeNumber() {
        return this.officeNum
    }
}

module.exports = Manager

// const Daniel = new Manager("Daniel", 4, "dan@gmail", "Manager", "#304")
// console.log(Daniel.getOfficeNumber())
// console.log(Daniel.getRole())