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