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

// Prompt user to create a Manager when application starts
function addManager() {
    console.log("Start building your Team Profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter the Manager's name:",
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
            message: "Enter the Manager's ID number:",
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
            message: "Enter the Manager's email address:",
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
            message: "Enter the Manager's office number:",
            validate: answer => {
                const pass = answer.match(
                    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            //        /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a correct number.";
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
    });
    }

    //Creates addTeam fuction to run after addManager
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What member would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }
    //Prompts to add Engineer if selected
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the Engineer's name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Engineer's name can't be left empty.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Engineer's ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the Engineer's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the Engineer's GitHub username:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the Engineer's GitHub username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }
    //Prompts to add Intern if selected
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the Intern's name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Intern's name can't be left empty.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the Intern's ID number:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Intern's ID.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email address:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the Intern's school:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a school.";
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        });
    }
    function generateHTML() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }

    addManager();

    }
    initApp();