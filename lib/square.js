const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    renderSquare() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"/><text x="138" y="103" fill="${this.textColor}">${this.text}</text></svg>`;
    }

}

module.exports = Square;