const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

const colorInputValidation = async (input) => {
    const colorValidation = /^#?([a-fA-F0-9]{6}|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i;

    if (input.match(colorValidation)) {
        return true;
    }
    else {
        return 'Please enter a valid color keyword or hexadecimal number (# + 6 characters)';
    }
}

    inquirer
        .prompt([
                {
                    name: 'logoText',
                    type: 'input',
                    message: 'Enter up to 3 characters.',
                    validate: input => input.length <=3 || 'Please enter up to 3 characters'
                },
            
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'What color would you like your text to be?',
                    default: 'Must be a color keyword or hexadecimal number (# + 6 characters)',
                    validate: colorInputValidation
                },
            
                {
                    name: 'shape',
                    type: 'list',
                    message: 'Select which shape you would like your logo to be. (use arrow keys to navigate)',
                    choices: ['circle', 'triangle', 'square']
                },
            
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'What color would you like your shape to be?',
                    default: 'Must be a color keyword or hexadecimal number (# + 6 characters)',
                    validate: colorInputValidation 
                }
            ])
        
        .then ((answers) => {
            let logoShape;
                switch (answers.shape) {
                    case 'circle' :
                        logoShape = new Circle(answers.shapeColor.trim(), answers.logoText.trim(), answers.textColor.trim());
                        renderCircle();
                        break;
                    case 'triangle' :
                        logoShape = new Triangle(answers.shapeColor.trim(), answers.logoText.trim(), answers.textColor.trim());
                        renderTriangle();
                        break;
                    case 'square' :
                        logoShape = new Square(answers.shapeColor.trim(), answers.logoText.trim(), answers.textColor.trim());
                        renderSquare();
                        break;
                } return logoShape;
            })

        .then ((logoShape) => {
                fs.writeFile('./examples/logo.svg', logoShape, (err) => {
                    err ? console.error() : console.log('Genearted logo.svg!');
                });
            });
        
