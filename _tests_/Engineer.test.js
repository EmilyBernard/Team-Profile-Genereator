const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Bob');
});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.github).toBe(testValue);
});

test('get github account with getGitHub() method', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

test('getTitle() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'engineer@email.com', 'GitHubAccount');
    expect(e.getTitle).toBe(testValue);
});
