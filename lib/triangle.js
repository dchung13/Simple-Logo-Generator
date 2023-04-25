const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    renderTriangle() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points= "50, 175 150, 25 250, 175" fill="${this.shapeColor}"/><text x="138" y="120" fill="${this.textColor}">${this.text}</text></svg>`;
    }

}

module.exports = Triangle;