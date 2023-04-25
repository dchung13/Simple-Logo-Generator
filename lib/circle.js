const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    renderCircle() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="${this.shapeColor}"/><text x="138" y="103" fill="${this.textColor}">${this.text}</text></svg>`;
    }

}

module.exports = Circle;