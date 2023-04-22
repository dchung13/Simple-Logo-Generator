const Shape = require('./shapes.js');

class Square extends Shape {
    super(shapeColor, text, textColor);

    renderSquare() {
        return render(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="100" width="50" height="50" fill="${this.shapeColor}"/>
        <text x="150" y="100" fill="${this.textColor}">${this.text}</text>
        </svg>`);
    }

}

module.exports = Square;