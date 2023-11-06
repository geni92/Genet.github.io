type Student= { studentid:number,quizanswer:number[]};
let student1:Student ={studentid:101,quizanswer:[1,1,2,4]} 
let student2:Student ={studentid:102,quizanswer:[2,1,2,2]} 
let student3:Student ={studentid:103,quizanswer:[3,1,3,4]} 
let array:Student[] = [student1,student2,student3];
let arr:number[][] = [student1.quizanswer,student2.quizanswer,student3.quizanswer];
 
function computeScore(student:Student,correctanswer:number[]){
    let count=0;
    for(let i=0;i<student.quizanswer.length;i++){
        if(student.quizanswer[i]===correctanswer[i]){
            count++;
        }
    }
    return count;

}
// for(let i =0; i < array.length; i++){
//     console.log(computeScore(array[i],[3,1,2,4]));
// }
function quizArray(arr:number[][], correctanswer:number[]): number[]{
     
    let array1:number[]=[];
    for( let i = 0; i < arr.length; i ++){
        array1.push(calculate(arr[i],correctanswer));
    }
    return array1;
  
            
        
    }
    console.log(quizArray(arr,[3,1,2,4]));
    function calculate(arr:number[], correctanswer:number[]){
        let count=0;
    
        for (let j =0; j < arr.length; j++){
        if(arr[j]=== correctanswer[j]){
            count++;
        }
    }
    
    return count;
}

