// console.log("Running ");

// export function computeSalesCommission(
//   issalaried: boolean,
//   salesAmt: number
// ): number {
//   if (issalaried && salesAmt >= 300 && salesAmt <= 500) {
//     return salesAmt * 0.01;
//   } else if (issalaried && salesAmt > 500) {
//     return 500 * 0.01 + (salesAmt - 500) * 0.02;
//   } else if (!issalaried && salesAmt >= 300 && salesAmt <= 500) {
//     return salesAmt * 0.02;
//   } else if (!issalaried && salesAmt > 500) {
//     return 500 * 0.02 + (salesAmt - 500) * 0.03;
//   } else {
//     return 0;
//   }
// }

// console.log("calling funciton: ")
// console.log(computeSalesCommission(true, 400));
export function calcDownpayment(cost:number):number {
  if (cost < 50000) {
  return cost * 0.05;
  } 
  else if (cost < 100000) {
  return 2500 + 0.10 * (cost - 50000);
  }
   else if (cost < 200000) {
  return 7500 + 0.15 * (cost - 100000);
  } 
  else {
  return 20000 + 0.10 * (cost - 200000);
  }
}

console.log("expect 2000: ", calcDownpayment(40000)); 
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000)); 
console.log("expect 25000: ", calcDownpayment(250000));


export function double(num:number):number{
  return 2 * num; 
}
//Write a function times100 that takes a number and returns 100 times the number.

export function times(num:number):number{
  return 100*num;
}

export function myMap(array:number[],callback:(item:number)=>number):number[]{
  let arr:number[]=[];
  for (let i=0;i<array.length;i++){
      arr.push(callback(arr[i]));
  }
  return arr;
}
  