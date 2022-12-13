const Employee = require('.Employee');

class Manager extends Employee {

    constructor(name, id, email, title='Manager', officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.title = title;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getTitle() {
        return 'Manager';
    }

}

module.exports = Manager;