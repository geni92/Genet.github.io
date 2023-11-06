// function add(a: number, b: number): number {
//   return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add(10, 5);
// console.log("sum1 is: ", sum1, " sum2 is: ", sum2);


// function reverse(array:number[]):number[]{
//   let num = array.length-1;
//   for(let i=0; i<=num; i++) {
//     // let temp = array[i];
//     // array[i]= array[num] ;
//     // array[num]=temp;
//     // num--;
//     let temp = array[num];
//     array[num]= array[i] ;
//     array[i]=temp;
//     num--;
//     // array[num]=array[i];
//     // let temp=array[num]
//     // array[i]=temp;
//     // num--;
    

     
//   }
//   return array;

// }
// let arr = [1,2,3,4,5,6];
//  console.log(reverse(arr))

// function sequentialnumber(num1: number, num2: number): number[][] {
//   let result: number[][] = [];
//   let count = 1;
//   let row = [];

//   for (let i = 0; i < num1; i++) {
//       for (let j = 0; j < num2; j++) {
//           row.push(count);
//           count++;
//       }
//       result.push(row);
//       row = [];
//   }

//   return result;


// }
// console.log( sequentialnumber(3,3));
//   console.log(  sequentialnumber(2,3));
//   console.log(  sequentialnumber(2, 1));

function sequentialnumber(num1:number,num2:number):number[][]{
            let result:number[][] = [];
             let count=1;
      for (let i = 1;i < num1;i++){
          let array=[];
         for(let j=1; j < num2;j++){
           array.push(count);
           count++
         }
         result.push(array)
      }
      return result;
  }
  
  console.log( sequentialnumber(3,3));
  console.log(  sequentialnumber(2,3));
  console.log(  sequentialnumber(2, 1));
  
