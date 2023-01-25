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
