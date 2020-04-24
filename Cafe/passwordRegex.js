const assert = require("chai").assert;

function validRegex(password){

    const isValid = [
        p=>p.length>3 && p.length<20,
        p=>p.match(/^[a-zA-Z0-9]+$/),
        p=>p.match(/[a-zA-Z][0-9]/)
    ];
    
    return isValid.every(p=>p(password)) ? 'VALID' : 'INVALID'
}
describe("Fixed tests", function () {
    it('1',()=>assert.strictEqual(validRegex('Username123') , 'VALID' ));
    it('2',()=>assert.strictEqual(validRegex('Username') , 'INVALID' ));
    it('3',()=>assert.strictEqual(validRegex('123') , 'INVALID' ));
    it('4',()=>assert.strictEqual(validRegex('Username123!') , 'INVALID' ));
    it('5',()=>assert.strictEqual(validRegex('ThisPasswordIsTooLong1234') , 'INVALID' ));
});