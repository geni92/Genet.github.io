
//#1
//function maxOfThree(num1:number,num2:number,num3:number): number {
//   if(num1 > num2 && num1 > num3)
//      return num1;

//   else if(num2>num1 && num2 >num3)
//     return num2;
// else
// return num3;
// return Math.max(num1,num2,num3)

// }
// console.log(maxOfThree(2,3,4))

//#2

 function sum(arr :number[]):number{
    let summation =0;
    for (let array of arr){
        summation+=array;

    }
return summation;
 }
 let arr=[1,2,3,4]

 console.log(sum(arr));

 function multiply(arr :number[]) : number{
    let mult =1;
    for (let array of arr){
        mult*=array;

    }
return mult;
 }

 let array=[1,2,3,4]
 console.log(multiply(array))

//#33. Write a function findLongestWord() that takes an array of words and returns the length of
//the longest one.

function findLongestWord( str:string[]) :string {
    let longestword = "";
    for(let words of str){
      if(words.length > longestword.length)
      longestword = words;
}
return longestword;
}
let str =["hebron","geni","seliye","soliana","rahwa"]
console.log(findLongestWord(str))



function findLongestnum( stra:number[]) :number {
    let longestword = 0;
    for(let words of stra){
      if(words > longestword)
      longestword = words;
}
return longestword;
} 
let stra = [7,9,17,88]
console.log(findLongestnum(stra))

//#4

function reverseArray(str:string[]):string[]{
    let result:string[]=[];
    for(let i = str.length-1; i>=0; i--){
      result.push(str[i])

    }
return result;
}
let reverse=["a","b","c"]
console.log(reverseArray(reverse))

function reverseArrayInPlace<T>(str:T[]):T[]{
    let left = 0;
    let right = str.length - 1;
    while(left <  right){
       let hold =str[left];
       str[left]=str[right]
       str[right]= hold;
            left++;
            right--;
            
        }
        return str; 
    }
 
let arra =[1,2,3,4,5]
console.log(reverseArrayInPlace(arra))
//#5

function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
    let scores: number[] = [];

    for (let student of studentAnswers) {
        let score = 0;

        for (let i = 0; i < correctAnswers.length; i++) {
            if (student[i] === correctAnswers[i]) {
                score++;
            }
        }

        scores.push(score);
    }

    return scores;
}

const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];
console.log(scoreExams(studentAnswers, correctAnswers));// --> [3,2,3]
//#6

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

 