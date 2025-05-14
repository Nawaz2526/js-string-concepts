
// java script topic ("string')
 // string is a sequence of character used to repersent text in java script
//  it can be written using single  (' '), double (" "), or backticks ( ).
let doubleQuotes = "Nawaz";
let singleQuates = 'Developer';
// let backticks    = `hi my name is  ${doubleQuotes} ${singleQuates}`;
// let backticks  =   `hi my name is ${doubleQuotes  +" "+  singleQuates}`;
// let backticks  =   "hi my name is "+ doubleQuotes  +" "+  singleQuates;
let backticks = "hi my name is ".concat(doubleQuotes," i am a " ,singleQuates);
console.log(backticks);
//string indexing
// Each charecter in a string has an index starting from  0
// N  a  w  a  z  
// 0  1  2  3  4
let str = "Nawaz Shaikh";
console.log(str.indexOf('N'));//output is 0
console.log(str.indexOf(" "));// output is 5
console.log(str.lastIndexOf('a'));//output is 8
let ind = str.indexOf('h');
console.log(ind);//output is 7
console.log(str[0]);//output is N

//--Important String Methods (with examples)--:
//1 toUpperCase()
let str1 = "developer";
console.log(str1.toLocaleUpperCase());// output is DEVELOPER
//2 tolowerCase()
let str2 = "DEVELOPER";
console.log(str2.toLocaleLowerCase());//output is developer
//3 trim 	Removes spaces from both ends
let str3 = "  Nawaz  ";
console.log(str3.trim()); // output is Nawaz    not include space
//A string is immutable, which means once a string is created,
//  its contents cannot be changed.
//Instead of modifying the original string, any operation that appears to 
// change a string actually creates and returns a new string.   
//4 slice()	return a part of the orignal string ar a new string
let str4 = "Ilavecoding";
console.log(str4.slice(5)); // output is coding 
console.log(str4.slice(1,5)); //output is love  Start from index 1 (inclusive)
//Go up to index 5, but do not include index 5 (exclusive) 
console.log(str4.slice(-1)); // its mean str4.slice(lenght-num) output is g
//5 replace search a value in the string & return a new string with the value replace
let str5 = "Mynameisnawaz";
console.log(str5.replace('nawaz','shaikh')); //output is Mynameisshaikh
//6 repeat
let str6 = "Nawaz"; //repeat variable
console.log(str6.repeat(3)); // output is NawazNawazNawaz
