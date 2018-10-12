const assert = require('chai').assert;
const secretSantra = require('../app.js');

//tests need work. we didn't really cover testing in school so this was what I could come up with while watching reading documentation in an airport!

//test for match w/self

describe('App', function(){
    it('match function should not return passing for choice equal to the sender', function () {
        assert.equal(secretSantra.matchSendingToReceiving(), {firstName: 'Benjamin', lastName: 'Kaplan'})
    });
});

//test for 3 year in a row match

// describe('App', function(){
//     it('match function should never repeat more then three times', function() {
//         assert.isAbove(secretSantra.checkForRepeats(), arr.length, 3)
//     })
// })

//test for match with immediate relative

describe('App', function() {
    it('match function should not return passing for choice matching lastName of sender.', function() {
        assert.equal(secretSantra.matchSendingToReceiving(), {firstName: 'Benjamin', lastName: 'Kaplan'})
    });
});

