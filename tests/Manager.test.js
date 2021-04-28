const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js')

describe('Manager Object', () => {
  
    it(`should return their name as entered`, () => {
    const empName = "Harold"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "Manager", "305-555-2653")
    expect(emp.getName()).toBe(empName);
  });
  
    it(`should return the Manager's role as entered`, () => {
    const empRole = "Manager"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "Manager", "305-555-2653")
    expect(emp.getRole()).toBe(empRole);

    const empTwo = new Manager("Kumar", 2, "kumar@gmail.com", "nothing", "305-555-2653")
    expect(empTwo.getRole()).toBe(empRole);
  });

  it(`should return their office phone number as entered`, () => {
    const empGit = "305-555-2653"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "Engineer", "305-555-2653")
    expect(emp.getOfficeNumber()).toBe(empGit);
  });
});