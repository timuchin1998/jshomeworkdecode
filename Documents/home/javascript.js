
/////////////////home///////////////
// let num = 0;
// while(num<= 100){
//     console.log(num);
//     num++;

// }

///2

// let i = 11;

// while(i <= 33){
//     console.log(i);
//     i++;
// }

///3


// for(let i = 0; i <= 100 ;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


///4

// let sum = 0; 
// for(let i = 0; i<=100; i++){
//      sum += i;          
    
// }
// console.log(sum);

///5
// let sum = 0; 
// for(let i = 0; i<=10; i++){
//      sum += i;          
    
// }
// console.log(sum/10);


///6
// let num = Number(prompt());
// for(let i = 1; i<=num;i++){
//     console.log(i **3);
// }


///7

// for(let i = 10 ; i <= 20; i++){
//     console.log(i **2);
// }


// let i=10;
// while(i <=20){
//     console.log(i **2);
//     i++;
// }


///8
// let sum =0;
// for(let i = 54; i < 234; i++){
//     sum +=i;
// }
// console.log(sum);


///9

// let numbereven = 0;
// let numberuneven =0;

// for(let i = 24; i <97; i++){
//     if(i%2==1){
//         numbereven++;
//     }else{
//         numberuneven++;
// }
// }
// console.log(`колво положительных = ${numbereven}`);
// console.log(`кол-во отрицательных = ${numberuneven}`);


///10
// let num = Number(prompt());

// for(let i =1; i<=10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }

//////11
// let i = 0;
// while(i<4){
//     console.log('*****',i);
//     i++;
// }


/////12

// let str = '';

// for(let i = 1; i<=5;i++)
// {
//     str = str + '*';
//     console.log(str);

// }



///13

// let num = 0;

// for(let i =1;i<=4;i++){
//     num = num*10+i;
//     console.log(num);
// }


////14 

// let i = 1001;

// while(i <= 1025){
//     document.write( ' ' + i );
//     i++;
// }

/////////15

// let num = Number(prompt());
// let sum = 0;
// for(let i = 0; i <= num; i++){
   
//     if(i%2===1){
//         console.log(i);
//         sum +=i;
        
//     }
// }
// console.log(`Сумма чисел = ${sum}`);


////////16

// let num=0;
// for(let i = 1000; i>=50; i--){
//     if(i%2==0){
//         console.log(i);
//         num +=1;
//     }

// }
// console.log(num);


/////////17

// for(let i= 500; i<=1800;i++){
//     if(i%5==0 || i%7==0){
//         console.log(i);
//     }

// }

/////18

// let i=0;

// while(i<6){
//     i++;
//      if(i==3){
//      continue;
//      }
     
// }
// console.log(i);
/////////////////////////////Не получилось через while


// for(let i = 0; i<=6 ; i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// }

////


////////19
// for(let i= 0; i<50; i++){
//     if(i%3==0 && i%5==0){
//         console.log('FizzBuzz',i);
//     }else if(i%3==0){
//         console.log('Fizz',i); 
//     }else if(i%5==0){
//         console.log('Buzz',i);
//     }
    
// }

///20

// let sum=0;
// let multiply=1;
// for(let i = 10;i <=20; i++ ){
//     if(i%2==0){
//         console.log(i);
//         sum += i;
//         multiply *= i;
//     }
    
    
// }

// console.log(sum);
// console.log(multiply);


// for(let i = 10;i <=20; i++ ){
//     if(i==15){
//         console.log('Break: '+i);
//         break;
//     }
//     console.log(i);

// }



////////////////21

// const num = 34560;
// for(let i =1;i<6;i++){

//     temp=num%Math.pow(10,i);
//     temp=temp/Math.pow(10,i-1);
//     temp = Math.trunc(temp);
    
//     console.log(temp);
//     if(temp%2==0){
//         console.log('четное');

//     }else{
//         console.log('нечетное');
//     }

// }

/////21 через строку 
// let even = 0;
// let odd = 0;

// let i = String(35670);

// for(let num of i){
//     if(num%2==0){
//         even+=1;
//     }else if(num%2!==0){
//         odd+=1;
//     }
// }
// console.log(even,'четное', odd,'нечетное');

////////21

// let num = Number(prompt());

// let cnt_odd = 0, cnt_even = 0;

// while (num !== 0) {
//     let lastNumber = num % 10;  // последнее цифра
//     num = parseInt(num / 10);   // убрать последнее цифру

//     if (lastNumber % 2 == 0) {
//         cnt_even++;
//     } else {
//         cnt_odd++;
//     }
// }

// console.log("Четные цифры:", cnt_even);
// console.log("Нечетные цифры:", cnt_odd);

//////////22
// let num = Number(prompt());

// let cnt =0;
// let sum = 0;

// while(num!==0){
// let lastNumber = num%10;
// num = parseInt(num/10);

// console.log(lastNumber);
// sum +=lastNumber;
// cnt++;

// }
// console.log(sum/cnt);






//////////////////////class work 4


// const res = [];

// for (let i =0; i < 3 ; i++){
//     let new_element= prompt();
//     res.push(new_element);

// }

// console.log(arr);



// const arr = [];
// for (let i = 0; i<5;i++){
//     let new_element=Number(prompt());
//     arr.push(new_element);
   
// }
// if(arr.length===1){
//     console.log(arr[0]);
//    }else if (arr.length>1){
//         console.log(arr[0],arr[arr.length-1]);
//    }
// console.log(arr);

//////////////////home word 4 

//////1/////
// const arr=[1,2,3,4,5];

// for(let i=0;i<arr.length;;i++){
//     console.log(arr[i]);
// }

/////2////


// const arr =[2,3,4,5];

// let res =1;
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
//      res *= arr[i]; 
//     // console.log(arr[i++]);
// }
// console.log(res);


////////////3////////

// const arr =[2,5,9,15,0,4];


// for(let i =0; i<arr.length;i++){
    
    
//     if(arr[i]<10 && arr[i]>3){
//         console.log(arr[i]);
//     }
   
// }

////////4/////////
// const arr=[2,-4,5,1,-5,12,13];
// let sum = 0;
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>0){
//         sum+=arr[i];
//     }
// }

// console.log(sum);


///////////5////////////

// const arr=[1, 2, 5, 9, 4, 13, 4, 10];


// for(let i =0; i<arr.length;i++){

   
//     if(arr[i]==4){
//         alert('Есть!');
//         break;
        
//     }

// }


////6///

// const week=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];


// for(let i=0; i<week.length;i++){
    
//     if(i === week.length - 1 || i === week.length - 2){
//         console.log(week[i].bold());
//     }
//         else{
//             console.log(week[i]);
//         }      
    
// }



///7///

// const arr=[1,2,3,4,5];

// const coparr= arr.slice(0,3);
// console.log(coparr);

////8
// const arr=[1,2,3,4,5];

// const coparr= arr.slice(3);
// console.log(coparr);

//////////9
// const arr=[1,2,3,4,5];

// arr.splice(1, 2); /// 1 2
// console.log(arr);



/////10 

// const arr=[1,2,3,4,5];

// // arr.pop(0); /// удалить последний элемент 
// arr.splice(0,1);
// arr.pop();
// console.log(arr);


// const arr=[]
/////11
// const arr =[1,2,3,4,5];

// arr.splice(2, 0, 'a','b','c');

// console.log(arr);

////12

// const arr=[1,2,3,4,5];
 
// arr.splice(1,0, 'a','b');
// arr.splice(6,0, 'с');
// arr.splice(8,0, 'e');
// console.log(arr);


////// 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'
////13

// const  str='123456';

// res = Array.from(str);

// res = String(res.reverse());

// console.log(typeof res.replaceAll(',', ''));





////14

    // const arr=[];
    // for(let i =0; i<6;i++){
    //     let new_element=Number(prompt());
    //     arr.push(new_element);
        
    // }
    // console.log(arr);
////15

// const mas =[];
// for(let i =0; i<3;i++){
//         let new_element=Number(prompt());
//         mas.push(new_element);
        
//     }

// const copmas = mas.reverse();
// console.log(copmas);

///16


// const arr=[1,1,25];

// console.log(arr);

// let sum =0;

// for (let num of arr){
//     sum+=num;
// }
// console.log(sum);


///17 

// const arr=[];

// let sum = 0;
// const reachElements= Number(prompt());
// for (let i = 0; i<reachElements;i++){
//     let enterNumber = Number(prompt());
//     arr.push(enterNumber);
//     sum+=arr[i];
//     

// }
// console.log(arr);
// console.log(reachElements);
// console.log(sum);


////1800000000000000000
// const arr = [];

// let size = Number(prompt());

// for (let i = 0; i < size; i++) {
//     let new_el = prompt();
//     arr.push(new_el);
// }

// const uniq = [];

// for (let el of arr) {

//     if (!uniq.includes(el)) {
//         uniq.push(el);
//     }
// }

// console.log(uniq);

////////18 При помощи  метода Set

// let arr = [4, 3, 2, 7, 1, 5, 6, 3 , 5,7];

// let res = Array.from(new Set(arr));//// Set собирает уникальные элементы массива

// console.log(res);



////19////

// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];


//     let delPocition= prompt();
//     let removed = myFish.splice(delPocition-1, 1);


// console.log(myFish);


///20///

// let arr=[2,4,1,5,8];

// for(let i = 0; i<arr.length;i++){
//      if (i%2==0){
//         // console.log(arr[i]);
//         console.log(Math.max(arr[i]));
//     }
// }


// const arr=[2,4,1,5,8];



// for(let i = 0; i<arr.length;i++){
//     if(arr[i] > arr[0]){
//         arr[0] = arr[i];
        
//     }

// }
// console.log(arr[0]);


///21///

// const arr=[4,3,2,7,1,5,6];

// let sum = 0;


// for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         a=sum/arr.length;
               
        
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<a){
//         console.log(arr[i]);
//     }
// }


// console.log(sum);
// console.log(a);




///22///


// const arr=[2,10,3,7,0,9];
// const arr=[2,1,3,7,8,9];

// let max_el = Math.max(...arr);
// let min_el = Math.min(...arr);

// let max_index = arr.indexOf(max_el);
// let min_index = arr.indexOf(min_el);

// if (min_index < max_index) {
//     console.log(arr.slice(min_index+1, max_index).join(","));
// } else {
//     console.log(arr.slice(max_index+1, min_index).join(","));
// }


//// Распаковка ///

// console.log(arr);
// console.log([2,1,3,7,8,9]);
// console.log(...arr);
// console.log(2,1,3,7,8,9);

////////////////22/////////////////




// const arr=[2,3,1,7,8,9];

// let maxI=0;
// let minI=0;
// positionMaxI=0;
// positionMinI=0;

// for(let i =0; i<arr.length; i++){
//     if(maxI<arr[i]){
//     maxI = arr[i];
//     positionMaxI=i;
//     }
//     else if(minI<arr[i]){
//         minI=arr[i];
//         positionMinI=i;
//     }
    
    
// }
// for(let i =0;i<arr.length;i++){
//     if(positionMinI<positionMaxI){
        
//     }
// }
// console.log(minI,positionMinI);
// console.log(maxI,positionMaxI);
// console.log(arr.slice(positionMinI+1,positionMaxI));


///23///
// const arr=[2,4,-10,-1,-8,6];

// for(let i =0;i<arr.length;i++){
//     if(arr[i]>0){
//         console.log(arr[i].);
//     }
// }
///24///
// const arr=[2,3,7,-10,-1,-8,6];

// let maxI=0;
// let position=0;

// for(let i = 0; i<arr.length;i++){
//     if(arr[i] > maxI){
//         maxI = arr[i];
//         position=i;
//     }
    
    
// }
// console.log(`Элемент = ${maxI}`);
// console.log(`Позиция = ${position}`);

 


///25///

// const arr=[2,4,-3,-5,6,7,-10,-12,0];

// const arrA=[];
// const arrB=[];
// for(let i =0;i<arr.length;i++){

//     if(arr[i]%2==0){
//         arrA.push(arr[i]);
//     }else{
//         arrB.push(arr[i]);
//     }
// }

// console.log(arrA);
// console.log(arrB);




/////class work 5



// let str ='decode';

// str +='!';
// console.log(str);


// let str='decode';

// let center = parseInt(str.length / 2);

// console.log(str.slice(0,center)+str.slice(center).toUpperCase);


//////home word 5

////////1 EASY
////////problem A


// let str = prompt();

// console.log(str.split(' ').length);/// посчитал кол-во пробеллов.



////////problem B

// let str = prompt();
// let a = prompt();
// let b = prompt();

// let strone='';

// for(let i =0; i<str.length;i++){
//     if(str[i]==a){
//          strone+=b;
       
//     }else{
//         strone+=str[i];
//     }
// } 
// console.log(strone);


// strone = str.replaceAll(a,b);
// console.log(strone);



//////Medium
///////////////////A////////////////
// let str = prompt();

// console.log(str);
// console.log(str.split("").reverse().join(""));




///////////////////B////////////////
// let str = "Midnight City";
// let str = "Decode is cool";
// let str = "Administrator";

// let strone= '';

// for (let i in str) {
//     code = str.codePointAt(i);
//     if (65 <= code && code <= 90 || 97 <= code && code <= 122 || 192 <= code && code <= 255) {
//         strone+=code;
//     }
// }

// console.log(strone);




/////////////////HARD///////////////


//////Problem A///////////

// let str='Bubblegum';

// let abcd='abcdefghijklmnopqrstuvwxyz';




// for(let i =0; i<str.length; i++){
//     for(let j=0;j<abcd.length;j++){
//         if(str[i].toLowerCase()==abcd[j]){
//             console.log(str[i],':', ++j);
//             break;
//         }
//     }
// }


//////Problem B///////////


// let str = prompt();
// let arr = str.split(' ');


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].length);    
// }


////////////////////HOME 6 

///////////1///////////
// const city={
//     name:'Berlin',
//     location:'Germany',
    
// };

// console.log(city);

// city.name = 'London';

// console.log(city);


///////////2///////////


// const obj={
//     'Коля': 1000,
//     'Вася': 500,
//     'Петя': 200,
// };

// alert('Коля : ' + obj.Коля);
// alert('Вася : ' + obj.Вася);


////////////3////////


// const student={
//     students:[
//     {name: 'Timur',surname:'Akanov', age: 21},       
//     {name: 'Alan',surname:'Akanov', age: 13},       
//     {name: 'Oljas',surname:'Akanov', age: 17},       
//     {name: 'Abay',surname:'Akanov', age: 14},       
//     {name: 'Aslan',surname:'Akanov', age: 25},       
//     {name: 'Erlan',surname:'Akanov', age: 22},       
//     {name: 'Ermek',surname:'Akanov', age: 27},       
// ]
// };
//     for(let el in student.students){    
//     if(student.students[el].age>19){
//         console.log(student.students[el].name);
//     }
// }
  
//////////////4//////////////
// const student={
//     students:[
//     {name: 'Timur',surname:'Akanov', age: 21,grade:84},       
//     {name: 'Alan',surname:'Akanov', age: 13,grade:85},       
//     {name: 'Oljas',surname:'Akanov', age: 17,grade:90},       
//     {name: 'Abay',surname:'Akanov', age: 14,grade:95},       
//     {name: 'Aslan',surname:'Akanov', age: 25,grade:100},       
//     {name: 'Erlan',surname:'Akanov', age: 22,grade:75},       
//     {name: 'Ermek',surname:'Akanov', age: 27,grade:80},       
// ]
// };

//     for(let el in student.students){    
//     if(student.students[el].grade>=85||student.students[el].grade>=100){
//         console.log(student.students[el].name);
//     }
// }


////////////////5////////////////0000000
// const student={
//     a:{ 
//     name:'Timur',
//     age:25,
//     gpa:3.5,
//     },
//     b:{
//     name:'Aidana',
//     age:35,
//     gpa:4.0,

//     }
// };
// console.log(student);
// for(let key in student.a){
//     console.log((`${key} : ${student.a[key]}`));
      
// }
// for(let key in student.b){
//     console.log((`${key} : ${student.b[key]}`));
// }

/////////////////////////6//////////////////


// function arraySum(arr){
//     let summa = 0;
    
//     for(let el of arr){
//         summa += el ;
//     }
//     return summa;
// }



// const student = {
    
// students:[
// 	{
// 		name: 'Alice',
// 		age: 19,
// 		gpa: 3.5,
// 	},
// 	{
// 		name: 'Richard',
// 		age: 22,
// 		gpa: 2.9,
// 	},
// 	{
// 		name: 'Sam',
// 		age: 20,
// 		gpa: 3.25,
// 	}
// ]
// };



/////////////////A
// for(let key in student.students){
//     if(student.students[key].name.charAt(0)=='A'){
//         console.log(student.students[key].name);
//     }
// }



/////////B
// for(let key in student.students){
//     if(student.students[key].gpa>3.0){
//         console.log(student.students[key].name);
//     }
// }


/////////////////////C++++


// let summa=0;
// for(let key in student.students){
//     summa+= student.students[key].gpa;
       
// }
// console.log(summa/student.students.length);

///////////////D

// for(let key in student.students){
//     if(student.students[key].age<21){
//         console.log(student.students[key].name);
//     }
// }

//////////////7//////////////////////
// const employees = [
// 	{
// 		salary: 190000,
// 		name: 'Alice',
// 		deadline: true
// 	},
// 	{
// 		salary: 90000,
// 		name: 'Richard',
// 		deadline: true
// 	},
// 	{
// 		salary: 240000,
// 		name: 'Sam',
// 		deadline: false
// 	}
// ];


//////////////////////////A/////////////////////////
// let res=[];
// for(let key in employees){
//     // debugger; /////работа с отладчиком js как найти ошибку  
//     res.push(employees[key].salary);
// }

// console.log(Math.max(...res));/////////////rest оператор  посмотреть 


////////////////B////////////////////

// let res=[];
// for(let key in employees){
//     // debugger; /////работа с отладчиком js как найти ошибку  
//     res.push(employees[key].salary);
// }

// console.log(Math.min(...res));/////////////rest оператор  посмотреть 

////////////////////////C///////////////////////
// let sum = 20000;
// let res =0;
// for(let key in employees){
//     if(employees[key].salary<100000){
//         res = (employees[key].salary);
//     }
//     // debugger; /////работа с отладчиком js как найти ошибку  
//     // res.push(employees[key].salary);
// }
// console.log(res+sum);

//////////////8//////////////////////
// let users=[
//     {
//     login:'alice19',
//     password:'alice19',
//     name:'',
//     },
//     {
//     login: 'richard19',
//     password:'richard19',
//     name:'Richard',
//     },
//     {
//     login:'sam19',
//     password:'',
//     name:'Sam',
//     }
// ];

// for(el of Array.of(...users)){
//     if ((el.login == '') || (el.password == '') || (el.name == '')){
//         users.splice(users.indexOf(el), 1);
//     }
// }


// for(let i = 0; i<users.length;){

//     const obj = users[i];
//     let flag = false;
//     for(let key in obj){
//         if(obj[key]===0){
//             users.splice(i,1);
//             flag =true;
//             break;
//         }
//         if(flag===false){
//             i++;
//         }
//     }
// }
// console.log(users);
////////////home function////////////// 

//////////////////1/////////////////////
// function cube(num){
//     return num**3;
// }
// console.log(cube(2));
// console.log(cube(3));
// console.log(cube(4));


//////////////////////2//////////////////

// function numberenter(x,y,z){
    
    
//     return (x-y)/z; 

// }
// console.log(numberenter(5,2,3));
// console.log(numberenter(10,2,4));

//////////////3///////////////////

// let day= Number(prompt());

    
// function week(day){
//     let arr=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'];
//     for(let i =1; i<=arr.length;i++){
//         if(i==day){
//             return (arr[i-1]);
//         }
//     }
// }

// console.log(week(day));


////////4///////

// let number= Number(prompt());
// function squareNumber(number){
//     return number*number;
// }

// console.log(squareNumber(number));

////////////////////////5////////////////////////

// function swapWithTemp(num1, num2){
//         let temp= num1;
//         num1=num2;
//         num2=temp;
//         console.log(num1,num2);
// }
// swapWithTemp(2,4);
// swapWithTemp(3,4);
// swapWithTemp(6,4);

/////////////////////////////6///////////////////
// function eventOddNumber(number){
//     if(number%2==0){
//         return `Четное число: ${number}`;
//     }
//     return `Нечетное число: ${number}`;
    
// }

// let number = Number(prompt());
// console.log(eventOddNumber(number));

////////////////////7//////////////////////


// let maxNum = [5, -1, 40, 355, 17, 3];

// function bigNumber(maxNum){
    
//         for (let i = 0; i < maxNum.length; i++) {
//     if(maxNum[i] > maxNum[0]){
//         maxNum[0] = maxNum[i];
// }

// }
// return (maxNum[0]);
// }
// let num = bigNumber(maxNum);
// console.log(num);

//////////////////8/////////////////////

// let a =Number(prompt());
// let b =Number(prompt());
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(a,b));

///////////////////9////////////

// let a =Number(prompt());
// let b =Number(prompt());
// function res(a,b){
//     return Math.min(a,b);
// }

// console.log(res(a,b));

/////////////10
// let a =Number(prompt());
// let b =Number(prompt());
// let c =Number(prompt());
// function res(a,b,c){
//     return Math.max(a,b,c);
// }

// console.log(res(a,b,c));

/////////////11
// let words=prompt();
// function wordsPrint(words){
    
//     for(let i = 0;i<5;i++){
//         console.log(words);
//     }
// }
// wordsPrint(words);


///////12
// let num = [5, 1, 4, 3, 7, 3];
// let res =0;
// function sum(num){
//     for(let i = 0; i<num.length; i++){    
//         res+=num[i];
//     }
//     console.log(res);
// }
// sum(num);



/////13 

// let str ='we were just kids';
// let letter ='w';
// let sum=0;
// function dudleLetter(str,letter) {
//     for(let el of str) {
//         // debugger;
//         if(el==letter) {
//             console.log(letter);
//             sum++;
//         }
//     }
// }
// dudleLetter(str,letter);
// console.log(sum);



///////14

// let a =[1, 2, 3, 4, 5];
// let b =[13, 24, 35, 46];
// let c =[-68, 325, 33, 40, 2, 8];

// let res=0;

// function arithmeticMeanoFElements(a){
//     res=0;
//     for(let i = 0; i<a.length; i++){    
//         res+=a[i];
//     }
    
//     console.log(res/a.length);
// }


// arithmeticMeanoFElements(a);
// arithmeticMeanoFElements(b);
// arithmeticMeanoFElements(c);


//////15

// let massiv=[1,13,99,440];
// let resMax=0;
// let resMin=0;
// function maxMinEl(massiv){
//     resMin = Math.min(...massiv);
//     resMax = Math.max(...massiv);
//         console.log(resMin);
//         console.log(resMax);
// }
// maxMinEl(massiv);


// console.log(resMax-resMin);

//////16

// const arr=[-2,422,1,-6,1,563,-4];

// const arrPassitiveNumbers=[];
// const arrNagitivNumbers=[];
// function arrNPNumbers(arr){
//     for(let i =0;i<arr.length;i++){

//         if(arr[i]>0){
//             arrPassitiveNumbers.push(arr[i]);
//         }else{
//             arrNagitivNumbers.push(arr[i]);
//         }
//     }
// }
// arrNPNumbers(arr);
// console.log(arrPassitiveNumbers);
// console.log(arrNagitivNumbers);


//////17
// const eventNumber = [];
// const oddNumber=[];
// function setEvenMassiv(eventNumber,oddNumber){
//     let e_element= prompt();
//         for (let i =0; i < e_element ; i++){
//             let new_element= prompt();
//         if(i%2==0){
//            eventNumber.push(new_element);
//         }else{
//            oddNumber.push(new_element);
//         }
//     }
// }

// setEvenMassiv(eventNumber,oddNumber);
// console.log('Четные числа : ' + eventNumber);
// console.log('Нечетные числа : ' + oddNumber);




//////18

// let text='They are absolutely unstoppable';
// let splits = text.split(' ');
// let maxElement= '';

// function showBigLetter(){
//     for(let el of splits){  
//         if(el.length > maxElement.length){
//             maxElement = el;
//         }
//     }
//     console.log(maxElement);
// }
// showBigLetter();


///////19

// const a=[2,3,1,5,6];
// let sumx=0;
// let sumy=0;
// function eventOddNum(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2==0){
//             sumx++;
//         }else{
//             sumy++;
//         }
//     }
// }
// eventOddNum(a);
// console.log('четные :'+ sumx);
// console.log('Нечетные :'+ sumy);


//////////////////20///////////////
// let season= Number(prompt());
// function setSeason(season){

    
//         if (season <=0){return 'такого нет';}
//         else if(season <= 2 || season===12){
//             return (`Зима ${season}`);
//         }else if(season>=3 || season<=5){
//             return (`Весна ${season}`);
//         }else if(season>=6 || season<=8){
//             return (`Лето ${season}`);
//         }else if(season>=9 || season<=11){
//             return (`Осень ${season}`);
//         }else{
//             return ('неправильный месяц');
//         }

    

// }
// console.log(setSeason(season));

//// 20 /////

// const figth_club = {
//     name : "figth_club",
//     genre : "triller",
//     year : 2000
// }

// const avatar = {
//     name : "avatar",
//     genre : "si-fi",
//     year : 2009
// }

// const titanic = {
//     name : "titanic",
//     genre : "drama",
//     year : 2000
// }

// const batman = {
//     name : "batman",
//     genre : "si-fi",
//     year : 2022
// }
// const movie_array = [figth_club, avatar, titanic, batman];


// const getGenreFromMoviesArray = (movies_array, genre) => {

//     const movies = [];

//     if(movie_array.genre === genre) {
//         movies.push(movie_array[i])
//     }

//     console.log(movies)

// }

// const getYearFromMoviesArray = (movies_array, year) => {

//     const movies = [];

//    for(let i = 0; i < movie_array.length; i++) { // тут почему не сработало?
       
//      if(movie_array[i].year > year) {

//         movies.push(movie_array[i]);
//      }
//    }

//     console.log(movies)
// }


// const searchMovieByGenre = (arrMovies, genre) => {
//     const newArrMovies = []
//     arrMovies.map(movie => {
//         if (movie.genre === genre) {
//             newArrMovies.push(movie)
//         }
//     })
//     console.log(newArrMovies);
// }

// const searchMovieByYear = (arrMovies, year) => {
//     const newArrMovies = []
//     arrMovies.map(movie => {
//       if (movie.year > year) {
//         newArrMovies.push(movie)
//       } 
//     })
//     console.log(newArrMovies);
//   }
  
// searchMovieByGenre(movie_array,"drama");
// searchMovieByYear(movie_array,2000);



///////////// 21 ////////////


// const users = [
// 	{
// 		login: "alice19",
// 		password: "alice19",
// 		name: ""
// 	},
// 	{
// 		login: "richard1",
// 		password: "richard18",
// 		name: "Richard"
// 	},
// 	{
// 		login: "sam22",
// 		password: "",
// 		name: "Sam"
// 	}
// ]

// const changeProperty = (obj, key, new_value) => {

//     let index = users.indexOf(obj);

//     users[index][key] = new_value;
// }

// changeProperty(users[0], "login", "alice5555");

// console.log(users);




///// 22 ///////


// const sumOfDigits = (num) => {
//     let summa = 0;

//     while (num > 0) {
//         let lastDigit = num % 10;
//         summa += lastDigit;

//         num = parseInt(num / 10);
//     }

//     return summa;
// }


// const arr = [12, 43, 123, 44, 22];

// console.log(arr);

// // arr.map((el, index) => {
// //     arr[index] = sumOfDigits(arr[index]);
// // });

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = sumOfDigits(arr[i]);
// }

// console.log(arr);




////// 23 ////////


// const allDividors = (num) => {
//     const res = []; 

//     for (let i = 1; i <= num; i++) {  // i: 1-48
//         if (num % i == 0) {
//             res.push(i);
//         }
//     }

//     return res;
// }

// let num = 48;
// console.log(allDividors(num));
    

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