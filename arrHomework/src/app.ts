
// //#1
// //function maxOfThree(num1:number,num2:number,num3:number): number {
// //   if(num1 > num2 && num1 > num3)
// //      return num1;

// //   else if(num2>num1 && num2 >num3)
// //     return num2;
// // else
// // return num3;
// // return Math.max(num1,num2,num3)

// // }
// // console.log(maxOfThree(2,3,4))

// //#2

//  function sum(arr :number[]):number{
//     let summation =0;
//     for (let array of arr){
//         summation+=array;

//     }
// return summation;
//  }
//  let arr=[1,2,3,4]

//  console.log(sum(arr));

//  function multiply(arr :number[]) : number{
//     let mult =1;
//     for (let array of arr){
//         mult*=array;

//     }
// return mult;
//  }

//  let array=[1,2,3,4]
//  console.log(multiply(array))

// //#33. Write a function findLongestWord() that takes an array of words and returns the length of
// //the longest one.

// function findLongestWord( str:string[]) :string {
//     let longestword = "";
//     for(let words of str){
//       if(words.length > longestword.length)
//       longestword = words;
// }
// return longestword;
// }
// let str =["hebron","geni","seliye","soliana","rahwa"]
// console.log(findLongestWord(str))



// function findLongestnum( stra:number[]) :number {
//     let longestword = 0;
//     for(let words of stra){
//       if(words > longestword)
//       longestword = words;
// }
// return longestword;
// } 
// let stra = [7,9,17,88]
// console.log(findLongestnum(stra))

// //#4

// function reverseArray(str:string[]):string[]{
//     let result:string[]=[];
//     for(let i = str.length-1; i>=0; i--){
//       result.push(str[i])

//     }
// return result;
// }
// let reverse=["a","b","c"]
// console.log(reverseArray(reverse))

// function reverseArrayInPlace<T>(str:T[]):T[]{
//     let left = 0;
//     let right = str.length - 1;
//     while(left <  right){
//        let hold =str[left];
//        str[left]=str[right]
//        str[right]= hold;
//             left++;
//             right--;
            
//         }
//         return str; 
//     }
 
// let arra =[1,2,3,4,5]
// console.log(reverseArrayInPlace(arra))
// //#5

// function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
//     let scores: number[] = [];

//     for (let student of studentAnswers) {       let score = 0;

//         for (let i = 0; i < correctAnswers.length; i++) {
//             if (student[i] === correctAnswers[i]) {
//                 score++;
//             }
//         }

//         scores.push(score);
//     }

//     return scores;
// }
 
// const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
// const correctAnswers = [3, 1, 2,4];
// console.log(scoreExams(studentAnswers, correctAnswers));// --> [3,2,3]
// //#6

//  function sequentialnumber(num1:number,num2:number):number[][]{
//           let result:number[][] = [];
//            let count=1;
//     for (let i = 1;i < num1;i++){
//         let array=[];
//        for(let j=1; j < num2;j++){
//          array.push(count);
//          count++
//        }
//        result.push(array)
//     }
//     return result;
// }

// console.log( sequentialnumber(3,3));
// console.log(  sequentialnumber(2,3));
// console.log(  sequentialnumber(2, 1));

 


// let num = "";
// if (num) {
//   console.log("i ");
// }
// let n = "h";
// if (n) {
//   console.log("i am ");
// }
// let nums = NaN;
// if (nums) {
//   console.log(" happy");
// }
// let numm ;
// if (numm) {
//   console.log("i am happy");
// }
// let arr= ["Apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
// console.log( arr[i] );
// }




// function sequentialnumber(num1:number,num2:number):number[][]{
//     let result:number[][] = [];
//      let count=1;
// for (let i = 1;i < num1;i++){
//   let array=[];
//  for(let j=1; j < num2;j++){
//    array.push(j);
  
//  }
//  result.push(array)
// }
// return result;
// }
// console.log(sequentialnumber(3,3));


// if (1) {
//     console.log(0);
// }
//else

// console. log(1);
// let abc = 123;
// function myfun (xyz:number) {
// xyz = xyz % 100;
// console. log(xyz); 23
// abc = xyz + 200;
// return xyz + abc; 

// }
// //console. log(abc);
//  console.log(myfun(abc)); 
//   console. log(abc); 
// let x = null;
// //let x = undefined;

//  if (x === undefined)
//   {
//     console.log("× is undefined")
// }
// if (x === null) { console.log("x is null");
// }
// function computAvg(arr:number[]):number[]{
//      let sum=0;
//      let array:number[]=[];
//      let average;
//      for(let ele of arr){
//         sum+=ele
//      }
//      average=sum/arr.length;
   
//      array.push(average)
//      return array

//     }
//    console.log(computAvg([1,2,3,4]))

// function isprime(num:number):Boolean{
//     let i=2;
    
//     while(i <= Math.sqrt(num)){
//        if(num % i ===0){
//         return false;
//        }
//        i++;
        
//        }
//        return true;
//     }
  

// function   maxprimenum(numm:number):number{
//     let i=2;
//     let nums:number[]=[]
//     let max=-Infinity;
//     while(i<= numm ){
//        if(isprime(i)){
//         nums.push(i);
//         if(i>max){
//         max=i;
//     }
// }
//    i++;
//     }
//     return max;
// }



// // let n=10;
// let n=6936;
// // let n=1;

// console.log(maxprimenum(n))


// function largestPrimefactor(num:number):number{
//     let i=2;
//     let largest=2;
//     if (num<=1){
//         return 0;
//     }

//     while(i <= num){
//        if(num %i ===0){
//            num/=i
//         largest=i;
//        }
//        i++
//     }
//     return largest;

//        }
//     //    let n=10;
//     //  let n=6936;
//         let n=1;
//        console.log(largestPrimefactor(n))
//    function isprime(num:number):boolean{
//        if(num<=1){
//         return false;
//        }
//         let i=2
       
//         while(i <= Math.sqrt(num )){
//             if(num%i===0){
//                 return false;
//             }
           
//             i++;   

//             }
//             return true;
//         }
        
  

//     function maxPrime(num:number):number{
//         if(num<=1){
//             return 0;
//            }
//            let i=2
//            let arr:number[]=[]
//            let max = -Infinity;
//            while(i  <=num){
//            if(isprime(i)){
//             arr.push(i)
//             if(i > max){
//             max=i

//            }

//             }
//             i++;
//            }
//            return max;
//     }

//     console.log(maxPrime(6936))

// function checkExam(correctans:string[],studentans:string[]):number{
//     let count=0;
//     for(let i=0;i<studentans.length;i++){
      
//            if(studentans[i]===correctans[i]){
//                 count+=4;
//            }
//             else
//             count+=-1;
//            }
//            return count;   
//         }
           
        
      
      
// console.log(checkExam(["a","a","b","b"],["a","c","b","d"]))

// function oddnum(num:number[]):number[]{
//     let arr:number[]=[];
//      for (let i=0;i < num.length;i++){
//         if(num[i]%2!==0){
//             arr.push(num[i])
//         }
       
//      }
//      return arr;
// }
// console.log(oddnum([1,2,3,5,7]))

// function largestarr(num:number[]):number{
//     let max =0;
//     for (let i=0;i< num.length;i++){
//         num[i]>max;
//         max=num[i]
//     }
//     return max;
// }
// console.log(largestarr([10,20,100,150]))


// function swap(array:number[]):number[]{
   
    
//    array.sort((a,b)=>a-b)
   
//      let num=array.length-1;
//      for (let i=0;i<array.length;i++){
//         let temp = array[num];
//         array[num]=array[i];
//         array[i]=temp;
//         num--
        
//      }
//      return array;

// }
// let arr:number[]=[10,2,4,3,5]
// console.log(swap(arr))

// function matchmatrix(testarr1:number[][],testarr2:number[][]):number[]{
//     let arr:number[]=[];
//  for(let i=0;i< testarr1.length;i++){
   
//     for(let j=0; j<testarr1.length;j++){
//      if(testarr1[i][j]===testarr2[i][j]){
//        arr.push(testarr1[i][j])

//      }
       
//     }
    
//  }
//  return arr;
// }
// const testArr1= [ [1,2,3], [5,2,3], [9,2,3] ]
// const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]]
// console.log(matchmatrix(testArr1,testArr2))

// function isprime(num:number):boolean{
// let count =0;
// if(num <= 1){
// return false;
// }
// for(let i=1 ;i<=num;i++){
// if(num % i === 0){
// count++;
// }
// }
// if(count > 2){
// return false;
// }
// return true;

// }
// console.log(isprime(5));

// console.log(isprime(0));

// console.log(isprime(2));


// function primefactor(num:number):number[]{
// let arr:number[]=[];

// for(let i=1;i<=num;i++){
// if(num%i===0&&isprime(i)){
//  arr.push(i);

// }
// }

// return arr;



// }
// console.log(primefactor(6936));


// function isprime(num:number):boolean{
//     if(num<=1){
//         return false;
//     }
//     let count=0;
//     for(let i=1; i<=num;i++){
//         if(num%i===0){
//             count++;
//         }
        
//     }
//     if (count > 2){
//         return false;
// }
// return true;  
//     }
//      console.log(isprime(5));

//     console.log(isprime(0));
    
//     console.log(isprime(2));
    
    


// function isfactor(num:number):number[]{
//     let arr:number[]=[]
//     for (let i=1;i<=num;i++){
//     if(num%i===0 && isprime(i)){
//         arr.push(i)
//     }
   
// }
// return arr
// }

// console.log(isfactor(6936));
// function sayHi(name: string) {

//     console.log("Hi " , name);
  
//     return "Bye " + name;
  
//   }
  
//   const sayHiReturn = console.log(sayHi("h") );
//   let age = 10;

// console.log(age);

// function output() {

//   age = 20;

//   console.log(age);

// }

// // output();

// console.log(age);

// const foo = console.log("hello");



function evennum(array:number[][]){
   let result:number[]=[];
     for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]%2===0){
                result.push(array[i][j])
            }
        }
      
     }
     return result;//[2,4,6,2,4]
    }

    function even(array:number[][]):number[][]{
        let result:number[][]=[];
          for(let i=0;i<array.length;i++){
             for(let j=0;j<array[i].length;j++){
                 if(array[i][j]%2===0){
                     result.push([array[i][j]])
                 }
             }
           
          }
          return result;//[[2],[4],[6],[2],[4]]
         }
         function evenN(array:number[][]):number[][]{
            let result:number[][]=[];
              for(let i=0;i<array.length;i++){
                let row:number[]=[];
                 for(let j=0;j<array[i].length;j++){
                     if(array[i][j]%2===0){
                         row.push(array[i][j])
                     }
                 }
                 result.push(row)
               
              }
              return result;//[[2,4,6,2,4]]
             }

console.log(evennum([[1,2,4,3,5,6],[1,2,3,4,5]]));
console.log(even([[1,2,4,3,5,6],[1,2,3,4,5]]));
console.log(evenN([[1,2,4,3,5,6],[1,2,3,4,5]]));