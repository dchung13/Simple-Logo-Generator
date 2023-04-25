const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

describe ('Circle', () => {
    describe('Circle', () => {
        it('should take in a shape color, text, and text color and render a circle using these inputs', () => {
            const testCircle = new Circle('blue', 'TST', 'orange');

            expect(testCircle.renderCircle()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="blue"/><text x="138" y="103" fill="orange">TST</text></svg>');
        });
    })
});

describe ('Triangle', () => {
    describe('Triangle', () => {
        it('should take in a shape color, text, and text color and render a triangle using these inputs', () => {
            const testTriangle = new Triangle('blue', 'TST', 'orange');

            expect(testTriangle.renderTriangle()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points= "50, 175 150, 25 250, 175" fill="blue"/><text x="138" y="120" fill="orange">TST</text></svg>');
        });
    })
});

describe ('Square', () => {
    describe('Square', () => {
        it('should take in a shape color, text, and text color and render a square using these inputs', () => {
            const testSquare = new Square('blue', 'TST', 'orange');

            expect(testSquare.renderSquare()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="150" height="150" fill="blue"/><text x="138" y="103" fill="orange">TST</text></svg>');
        });
    })
});