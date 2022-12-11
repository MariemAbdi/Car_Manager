var assert= require('assert')

describe("carTests",function() {
    describe("carAge",function(){
        it("Age Should Be Equal To 22 When Since=2000",function(){
            var result = new Date().getFullYear()-2000
            assert.equal(result,22)
        })
    })
})