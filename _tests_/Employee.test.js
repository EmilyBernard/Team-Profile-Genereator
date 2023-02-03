const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Wanda');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'employee@email.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('getTitle() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Wanda', 1, 'employee@email.com');
    expect(e.getTitle()).toBe(testValue);
});