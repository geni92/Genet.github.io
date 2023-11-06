import {assert} from "chai"
// import{computeSalesCommission} from "../src/app.js"

// describe ("test of ComputSalesCommission", function(){
//     it("tests salaried and 200 sales", function(){
//         assert.strictEqual(computeSalesCommission(true, 200), 0);
//     });
//     it("tests not salaried and 200 sales", function(){
//         assert.strictEqual(computeSalesCommission(false, 200), 0);
//     });
//     it("tests salaried and 300 sales", function(){
//         assert.strictEqual(computeSalesCommission(true, 300), 3);
//     });
//     it("tests not salaried and 300 sales", function(){
//         assert.strictEqual(computeSalesCommission(false, 300), 6);
//     });
    
// });
import{calcDownpayment} from "../src/app.js"
describe("test of downpayment",function(){
    it("test cost of $2000",function(){
        assert.strictEqual(calcDownpayment(40000),2000);
    })
    it("test cost of $50000",function(){
        assert.strictEqual(calcDownpayment(50000),2500);
    })
    it("test cost of $100000",function(){
        assert.strictEqual(calcDownpayment(100000),7500);
    })
    it("test cost of $250000",function(){
        assert.strictEqual(calcDownpayment(250000),25000);
    })


})



import {double} from "../src/app.js"
describe("double ",function(){
    it("test double 2" ,function(){
        assert.strictEqual(double(2)*2,4)
    });
});
import{times}from "../src/app.js"
 describe("times",function(){
    it("tests times 100",function(){
        assert.strictEqual(times(10)*100,1000)
    });
    it("tests times 100",function(){
        assert.strictEqual(times(14)*100,1400)
    });
 });
 import{myMap}from "../src/app.js"

 describe('myMap function', () => {
    it('should triple the values using anonymous function expression', () => {
        let numbers: number[] = [1, 2, 3, 4, 5];

        let tripledNumbers = myMap(numbers, function(item) {
            return item * 3;
        });

        assert.deepEqual(tripledNumbers, [3, 6, 9, 12, 15]);
    });

    it('should triple the values using arrow function expression', () => {
        let numbers: number[] = [1, 2, 3, 4, 5];

        let tripledNumbers = myMap(numbers, item => item * 3);

        assert.deepEqual(tripledNumbers, [3, 6, 9, 12, 15]);
    });
});