const Employee = require('../lib/Employee.js');
 
describe('Employee Object', () => {
  it('should return their name as entered', () => {
    const empName = "Harold"
    const emp = new Employee("Harold", 1, "harold@gmail.com", "Employee")
    expect(emp.getName()).toBe(empName);
  });

  it('should return their email as entered', () => {
    const empEmail = "harold@gmail.com"
    const emp = new Employee("Harold", 1, "harold@gmail.com", "Employee")
    expect(emp.getEmail()).toBe(empEmail);
  });

  it('should contain a @ in the email string', () => {
    const emp = new Employee("Harold", 1, "harold@gmail.com", "Employee")
    expect(emp.email).toEqual(expect.stringContaining('@'));
  });

  it('should return their employee ID as entered', () => {
    const empID = 1
    const emp = new Employee("Harold", 1, "harold@gmail.com", "Employee")
    expect(emp.getID()).toBe(empID);
  });

  it('should return their role as entered', () => {
    empRole = "Employee"
    const emp = new Employee("Harold", 1, "harold@gmail.com", "Employee")
    expect(emp.getRole()).toBe(empRole);
    const newEmp = new Employee("Harold", 1, "harold@gmail.com", "nothing")
    expect(emp.getRole()).toBe("Employee");
  });

});