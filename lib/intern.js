const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email)
        //this.title = title;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getTitle() {
        return 'Intern';
    }

}

module.exports = Intern;