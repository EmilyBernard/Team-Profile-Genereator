const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email)
        //this.title = title;
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getTitle() {
        return 'Engineer';
    }

}

module.exports = Engineer;