/////////////////////////////// object //////////////////////////////

// const car = {
//     "name": "toyota",
//     "weigth": 1000, 
//     "model": "camry", 
//     "color": "черный",
//     "setting": {
//         "comp": "LE",
//         "transmission": "auto" 
//     },
//     "owners": ["Erlan", "Abay", "Alan"]
// }

// console.log(car.setting.transmission);
// console.log(car.owners.at(0));


///////// длина //////////////
// console.log(Object.keys(car).length);

// console.log(car);

// car["weigth"] = 1500;
// delete car["weigth"];

// console.log(car);

// console.log(car[7]);
// console.log(car["weigth"]);
// console.log(car.weigth);
// console.log(car["a b"]);



///////// итерация /////////


// for (let key in car) {
//     console.log(key + ":", car[key]);
// }




///////// object <-> str ///////////

// console.log(JSON.stringify(car));

// let text = '{"name": "Erlan", "age": 21}';

// const student = JSON.parse(text);

// console.log(student.age);




/////////////////////////////////// functions ///////////////////////////


// function welcome(u_name, u_surname) {
//     console.log(`Hello, ${u_name} ${u_surname}!`);
// }


// let user_name = prompt();
// let user_surname = prompt();

// welcome(user_name, user_surname);
// welcome("Erlan", "Karabaliev");



// 3! = 1 * 2 * 3
// function factorial(num) {
//     let res = 1;

//     for (let i = 1; i <= num; i++) {
//         res *= i;
//     }

//     return res;
// }



// let ans = factorial(5); // 120
// console.log(ans * 2)

// console.log(factorial(10)); // 3.5m


// console.log(factorial(factorial(3))); // 6  720




// function isPositive(num) {
//     if (num > 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isPositive(5));
// console.log(isPositive(-3));

// const arr = [5, -6, 3, -7, 8];
// let summa = 0;

// for (let el of arr) {
//     if (isPositive(el)) {
//         summa += el;
//     }
// }

// console.log(summa);




// function isPositive(num) {
//     if (num > 0) {
//         return true;
//     }
//     return false;
// }

// const isPositive = function(num) {
//     if (num > 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isPositive(5));
// console.log(isPositive(-3));

// const isPositive = (num) => {
//     if (num > 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isPositive(5));
// console.log(isPositive(-3));



// function alan() {

//     const innerTest = () => {
//         console.log("inner function");
//     }

//     innerTest();
// }

// alan();









////////// class work object //////////////


/// Easy D ///

// function array_sum(arr) {
//     let summa = 0;

//     for (let el of arr) {
//         summa += el;
//     }

//     return summa;
// }

// const info = {
//     "name": "Aidana",
//     "grades": [96, 78, 67, 73, 90]
// }

// console.log(array_sum(info.grades) / info.grades.length);



//// Hard A ///


// const students = {};
// let n = Number(prompt());
// let all_grades = 0;

// for (let i = 0; i < n; i++) {
//     const info = prompt().split(" ");

//     if (info[0] in students) {
//         students[info[0]] += Number(info[1]);
//     } else {
//         students[info[0]] = Number(info[1]);
//     }
//     all_grades += Number(info[1]);
// }


// for (let name in students) {
//     console.log(name, (students[name] / all_grades)*100 + "%");
// }




//////////////////////// Class Work fuunc /////////////////

/// Easy C ///


// const oddOrEven = (num) => {
//     if (num % 2 == 0) {
//         return "Even";
//     }
//     return "Odd";
// }


// let n = Number(prompt());
// console.log(oddOrEven(n));


/// Easy D ///

// const sumOneToNumber = (num) => {
//     let summa = 0;

//     for (let i = 1; i <= num; i++) {
//         summa += i;
//     }

//     return summa;
// }

// let n2 = Number(prompt());
// console.log(sumOneToNumber(n2));
