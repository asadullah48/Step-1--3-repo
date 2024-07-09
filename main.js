var message1 = "Hello World"; // Infering Types, 
//take your cursor on the variable ID
console.log(message1);
var numb2 = 47;
console.log(numb2);
var isStudent = true;
console.log(isStudent);
//string must be written in double quotes
//strong typing
//type inference
// Difference between JSON  and javascript object
// Let object name = {
// "key1" : "value1",
// "key2" : "value2",
// "key3" : "value3"
//}
var student1 = {
    "name": "usman",
    "age": 47,
    "isStudent": true
};
console.log(student1.name); // dot notation
console.log(student1.isStudent); // dot notation
console.log(student1["age"]); // square bracket notation
//JSON Array
var students = [
    {
        "name": "usman",
        "age": 47,
        "isStudent": true
    },
    {
        "name": "Kamal",
        "age": 33,
        "isStudent": false
    },
    {
        "name": "Mansoor",
        "age": 45,
        "isStudent": true
    }
];
// Syntax Error
//let myName = AFSHEEN
//  Lett arr : {1,2,3]
//TYPE ERROR
var message = "Hello World";
//console.loger(message);
//let age:number = "twenty"
//let numbers: number[]=["1","2","3"];
//Assignability Error
//let message1 = "Hello World";
//message1= true
message1 = "learning & Praticing coding";
console.log(message);
//Reference Error
// console.log (add(2,3))
// const add =(a:number, b:number)=>{
//     return a+b;
// }
//strong typing
//strongly typed syntax
// let a : string = "Pakistan";
// a = "USA";
// let b : number = 9;
// let c : boolean = true; //explicit typing
// //type inference
var myCountry = "Pakistan";
var n = 11.9;
n = 22;
var g = false;
g = true; //implicit typing
//let and const
//use const where variable values do not change
var a = 5;
var b = 33;
var c = "best";
//const        //cant redeclare or reassign
var myAcount = 2356;
//  myAcount = 89987
//var
var messege2 = "hello";
var message2 = "learning & Praticing coding";
