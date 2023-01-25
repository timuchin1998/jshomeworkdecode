/////////////////////homework 7

// const arr=[10,120,11,22,34,13,1234];

// function arrone(arr) {
//     for(let i=1;i < arr.length+1; i++){
//         // debugger;
//         if(arr[i-1] < arr[i]){
//             console.log(arr[i]);
//         }
//     }
// }
// arrone(arr);

//////////////////////////////////////////////////////

// const arr=[10,120,11,22,34,13];
// const arr=[17,121,11,21,35,13];
// let max=[];
// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         max.push(arr[i]);
//     }
// }
// if(max.length==0){
//     console.log('Error');
    
// }else{
//     console.log(Math.max(...max));
// }


///////////////////////Medium////////////////////////

// let d = {
//     'OOP':[ 81,88,72,97],
//     'ICT':[78,69,86,98],
//     'MATH':[65,69,78,98],
//     'PHYSICS': [87,99,66,70],
// };
// for(let el in d){
//     let sum=0;
//     for(let i =0;i<d[el].length;i++){
//         sum+=d[el][i]/d[el].length;
//     }
//         d[el]=sum;
// }
// console.log(sum);

/////////////////////////////////////////////////B//////////////////////////

// let str="In the hole in the ground there lived a hobbit";

// const first = text.index('h');
// const last = text.lastIndexOf('h');

// const s1= texx.slice(0,first);
// let s2 = text.slice(first,last+1).split("").reverse().join("");
// let s3 = text.slice(last+1);

// console.log(s1+s2+s3);

////////////////////////Hard///////////////////////


/////////////////////////////////////////////////////A///////////////////////////
// const arr=[10,120,11,22,34,13];
// const arr=[16,120,12,24,36,12];
// let max=[];
// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         max.push(arr[i]);
        
//     }
// }
// if(max.length==0){
//     console.log('Error');
    
// }else{
//     console.log('Число : ' + Math.max(...max));
//     let lastNumber = (Math.max(...max))%10;
//     max = parseInt(Math.max(...max)/ 10);
//     let maxSum=lastNumber + max;
//     console.log('Сумма : ' +maxSum);
// }
////////////////////////////////////////////////B/////////////////////////////////////

//// Medium B ///

// let text = prompt();

// const first = text.indexOf("h");
// const last = text.lastIndexOf("h");

// let s1 = text.slice(0, first);
// // let s2 = text.slice(first, last+1).split("").reverse().join("");
// let s2 = "";
// for (let i = last; i >= first; i--) {
//     s2 += text[i];
// }

// let s3 = text.slice(last+1);

// console.log(s1 + s2 + s3);

// In the hole in the ground there lived a hobbit
// abc h decode hokage h def



//// Hard B ////

// let a = Number(prompt()), b = Number(prompt());

// const python = [], cpp = [], alone = [];

// for (let i = 0; i < a; i++) {
//     let name = prompt();
//     python.push(name);
// }
// for (let i = 0; i < b; i++) {
//     let name = prompt();
//     cpp.push(name);
// }

// let same_cnt = 0;
// for (let name of python) {
//     if (cpp.includes(name)) {
//         same_cnt++;
//     }
// }

// // console.log(alone.length);
// console.log(python.length + cpp.length - same_cnt*2);