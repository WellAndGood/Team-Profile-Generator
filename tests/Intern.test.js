const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js')

describe('Intern Object', () => {
  
    it(`should return the Manager's name as entered in the class constructor`, () => {
    const empName = "Harold"
    const emp = new Intern("Harold", 1, "harold@school.com", "Intern", "School of Rainbows and Sunshine")
    expect(emp.getName()).toBe(empName);
  });

    it(`should return the Intern's role as entered in the class constructor`, () => {
    const empRole = "Intern"
    const emp = new Intern("Harold", 1, "harold@school.com", "Intern", "School of Rainbows and Sunshine")
    expect(emp.getRole()).toBe(empRole);

    // Also allows for 'student', but will be transformed to 'Intern'
    const empTwo = new Intern("Harold", 1, "harold@school.com", "Student", "School of Rainbows and Sunshine")
    expect(empTwo.getRole()).toBe(empRole);
  });

  it(`should return their office number as entered in the class constructor`, () => {
    const empSchool = "School of Rainbows and Sunshine"
    const emp = new Intern("Harold", 1, "harold@school.com", "Manager", "School of Rainbows and Sunshine")
    expect(emp.getSchool()).toBe(empSchool);
  });
});