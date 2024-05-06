// SVGGenerator.js

class SVGGenerator {
    static createSVG(text, textColor, shape, shapeColor) {
        let svgContent = '';
        switch (shape) {
            case 'circle':
                svgContent = `<svg width="300" height="200">
                                <circle cx="150" cy="100" r="90" fill="${shapeColor}" />
                                <text x="150" y="120" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                            </svg>`;
                break;
            case 'triangle':
                svgContent = `<svg width="300" height="200">
                                <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
                                <text x="150" y="140" font-size="45" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                            </svg>`;
                break;
            case 'square':
            default:
                svgContent = `<svg width="300" height="200">
                                <rect x="50" width="200" height="200" fill="${shapeColor}" />
                                <text x="150" y="125" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                            </svg>`;
                break;
        }
        return svgContent;
    }
}

module.exports = SVGGenerator;
