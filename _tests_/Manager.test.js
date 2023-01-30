const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('JaSON');
});

test('set office number with constructor', () => {
    const testValue = '227';
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = '227';
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('getTitle() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', '227');
    expect(e.getTitle()).toBe(testValue);
});
