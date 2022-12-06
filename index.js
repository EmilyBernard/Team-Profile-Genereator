const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
