/* Working with Modules */

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject {
    constructor() {
        console.log('object created');
    }
}

/*module.exports = {
    sum,
    PI,
    SomeMathObject
}*/


module.exports =  exports =  { hola: 'hola'}
exports.holi = 'holi';

/*
exports.sum = sum;
exports.PI = PI;
exports.SomeMathObject = SomeMathObject;
module.exports.hey = 'hey';
*/