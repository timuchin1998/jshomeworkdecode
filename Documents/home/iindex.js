
// .at(pos) - возвращает символ по индексу, так же может работать с отрицательными индексами

// .toUpperCase() - возвращает строку с верхним регистром
// .toLowerCase() - возвращает строку с нижним регистром

// .indexOf(str, ~pos~) - начинает пойск заданной строки и возвращает индекс.
// 		       Так же может принимать позицию с какого индекса начать пойск(Если не передавать позицию, поиск начнется с нулевой позиций)
//   		       Если то что вы искали не найден, возвращается -1
// .lastIndexOf(str, ~pos~) - тот же поиск, те же правила, ищет справа на лево

// .includes(str) - возвращает true если строка найдена, иначе false

// .startWith(str) - возвращает true если ваша строка начинается с заданной строкой, иначе false
// .endsWith(str) - возвращает true если ваша строка заканчивается с заданной строкой, иначе false

// .slice(start, end)	- от start до end (не включая end)
// .substring(start, end)	- между start и end
// .substr(start, length)	- length символов, начиная от start

// .trim() - убирает пробелы с двух сторон
// .repeat(n) - повторяет строку n раз

// .replace(old_str, new_str) - возвращает новую строку где old_str заменён на new_str только один раз


// .codePointAt(pos) - Возвращает код для символа, находящегося на позиции pos
// String.fromCodePoint(code) - Создаёт символ по его коду code

// str1.localeCompare(str2) - для сравнения [1 если str1 больше] [-1 если str2 больше] [0 если равны]




// let str = "DeCode";

// str += "!";
// console.log(str);


/// at ///

// console.log(str[-2]);
// console.log(str.at(-2));


// console.log(str.length);

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// for (let el of str) {
//     console.log(el + ".");
// }

// str = "." + str.slice(1);
// console.log(str);


// let str2 = "123-456-789";

// let x = str2.split("-");

// console.log(x);
// console.log(str2);


/// lower upper ///
// str = "DeCode!";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());



// let ans = prompt();

// if (ans.toLowerCase() === "hello") {
//     console.log("Have nice day");
// }



/// indexOf ///

// str = "decode";


// console.log(str.indexOf("e", 3));
// console.log(str.indexOf("k"));

// console.log(str.lastIndexOf("e"));



/// startWith endWith ///

// str = "hello";

// console.log(str.includes("l"));
// console.log(str.startsWith("e"));
// console.log(str.endsWith("llo"));



/////////////////

// .slice(start, end)	- от start до end (не включая end)
// .substring(start, end)	- между start и end
// .substr(start, length)	- length символов, начиная от start

// str = "decode-prog";

// console.log(str.slice(-4, -1));
// console.log(str.substring(-4, -1));
// console.log(str.substr(3, 4));


/////////////////////


// let message = prompt();

// console.log(`Your mess: "${message.trim()}"`);




/// replace ///

// str = "DeCode";

// console.log(str.replace("DeC", "....."));
// console.log(str.toLowerCase().replaceAll("d", "."));



/// str1.localeCompare(str2) ///


// console.log("decode" > "apple");
// console.log("decode".localeCompare("decode"));






//////////////// Class work 5 js ////////////

/// Easy B ///

// let str = prompt();
// console.log(str);

//1 
// console.log(str.split(""));
// console.log(str.split("").reverse());
// console.log(str.split("").reverse().join(""));

//2 
// let str_reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     str_reversed += str[i];
// }

// console.log(str_reversed);




/// Easy D ///

// let str = prompt();

// let center = Math.round(str.length / 2);

// console.log(str.slice(0, center) + str.slice(center).toUpperCase());



/// Medium C ///

// let str = prompt();
// console.log(str);

// let str_reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     str_reversed += str[i];
// }

// console.log(str.toLowerCase() === str_reversed.toLowerCase());



/// hard A ///

// let str = "s0m3d1g1ts";
// let summa = 0;

// for (let i in str) {
//     let code = str.codePointAt(i);
//     if (48 <= code && code <= 57) {
//         summa += Number(str[i]);
//     }
// }

// console.log(summa);



// console.log(String.fromCodePoint(90)); 