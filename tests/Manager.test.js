const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js')

describe('Manager Object', () => {
  
    it(`should return their name as entered`, () => {
    const empName = "Harold"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "employee")
    expect(emp.getName()).toBe(empName);
  });
  
    it(`should return the Engineer's role as entered`, () => {
    const empRole = "Engineer"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "Engineer", "haroldsGithubPage")
    expect(emp.getRole()).toBe(empRole);

    const empTwo = new Manager("Kumar", 2, "kumar@gmail.com", "nothing", "kumarsGithubPage")
    expect(empTwo.getRole()).toBe(empRole);
  });

  it(`should return their Github account as entered`, () => {
    const empGit = "haroldsGithubPag"
    const emp = new Manager("Harold", 1, "harold@gmail.com", "Engineer", "haroldsGithubPage")
    expect(emp.getGithub()).toBe(empGit);
  });
});