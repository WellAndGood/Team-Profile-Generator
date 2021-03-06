const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js')

describe('Manager', () => {
    describe('Initialization', () => {
        it(`should return the Manager's name as entered in the class constructor`, () => {
        const empName = "Harold"
        const emp = new Engineer("Harold", 1, "harold@gmail.com", "Engineer", "HaroldsGitPage")
        expect(emp.getName()).toBe(empName);
    });

        it(`should return the Engineer's role as entered in the class constructor`, () => {
        const empRole = "Engineer"
        const emp = new Engineer("Harold", 1, "harold@gmail.com", "Engineer", "HaroldsGitPage")
        expect(emp.getRole()).toBe(empRole);

        // 
        const empTwo = new Engineer("Harold", 1, "harold@gmail.com", "Engineer", "HaroldsGitPage")
        expect(empTwo.getRole()).toBe(empRole);
    });

    it(`should return their Github page as entered`, () => {
        const empGit = "HaroldsGitPage"
        const emp = new Engineer("Harold", 1, "harold@gmail.com", "Manager", "HaroldsGitPage")
        expect(emp.getGithub()).toBe(empGit);
    });
    });
});