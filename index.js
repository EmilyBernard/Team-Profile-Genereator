const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/template.js');

// Create empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];

// Start application
function initApp() {

// Prompt user to create a manager when application starts
function addManager() {
    console.log("Start building your Team Profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What's the Manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the Team Manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the Manager's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid Manager's ID.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the Manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be empty.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What's the Manager's office number? (format: 111-111-1111)",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a correct phone number.";
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
    });

    };