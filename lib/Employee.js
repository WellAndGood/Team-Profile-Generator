class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role = "Employee"
    }
}

module.exports = Employee;