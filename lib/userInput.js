// UserInput.js
const inquirer = require('inquirer');

class UserInput {
    static async promptUser() {
        return await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: function (input) {
                    // Validate input length
                    return input.length <= 3;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (color keyword or hexadecimal):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (color keyword or hexadecimal):'
            }
        ]);
    }
}

module.exports = UserInput;
