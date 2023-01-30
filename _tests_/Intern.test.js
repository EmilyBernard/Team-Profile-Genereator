const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Monica');
});

test('set school with constructor', () => {
    const testValue = 'TunxisCC';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'TunxisCC';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getTitle() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'TunxisCC');
    expect(e.getTitle()).toBe(testValue);
});
