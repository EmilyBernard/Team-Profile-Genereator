const Employee = require('.Employee');

class Engineer extends Employee {

    constructor(name, id, email, title='Engineer', github) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.title = title;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getTitle() {
        return 'Engineer';
    }

}

module.exports = Engineer;