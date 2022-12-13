const Employee = require('.Employee');

class Intern extends Employee {

    constructor(name, id, email, title='Intern', school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.title = title;
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