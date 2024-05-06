// LogoGenerator.js
const fs = require('fs');
const SVGGenerator = require('./shapes');
const UserInput = require('./userInput');

class LogoGenerator {
    static async generateLogo() {
        try {
            const userInput = await UserInput.promptUser();
            const svgContent = SVGGenerator.createSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
            fs.writeFileSync('./examples/logo.svg', svgContent);
            console.log('Generated logo.svg');
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

module.exports = LogoGenerator;
