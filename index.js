const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./lib/shapes');

// Function to prompt user for input
async function promptUser() {
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

// Function to generate SVG file
function generateSVG(data) {
    const { text, textColor, shape, shapeColor } = data;
    const svgContent = createSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('./examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
}

// Main function
async function main() {
    try {
        const userInput = await promptUser();
        generateSVG(userInput);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the application
main();
