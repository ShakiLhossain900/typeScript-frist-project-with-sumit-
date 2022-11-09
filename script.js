// const coutery = "Bangladesh";
// console.log(coutery);
// let name = 'this is shakil';
// console.log(name);
// function add(a: number, b: number){
//     return a+b
// }
// const result = add(2,4)
// console.log(result);
// let fruits = ['apple', 'orange', 'banana',23,false];
// fruits.push(2);
// fruits.push(true);
// console.log(fruits);
// Lesson 4 - Explicit & Union Types 
// let a: string;
// let b: number;
// let f: string| number;
// let c: string[]=[];
// a="name is shakil";
// b=23;
// c.push('apple');
// let d : number[] =[];
// d.push(234)
// let a: (string | number)[] =[];
// let c: object;
// let g: {
//     name: string;
//     age: number;
//     adults: boolean;
// }
// g={
//     name: 'shakil',
//     age:34,
//     adults: false
// }
// Lesson 5 - Dynamic Type 
// let a : any;
//  a= 5;
//  a = 'shakil'
//  //any type or dynamic type
//  let b : any[] = [];
//  b.push('Bangladesh');
//  b.push(34);
//  console.log(b);
//  //object 
//   let o :  {
//     name: any;
//     age: any;
//   }
//   o = {
//    name: 'Bangladesh',
//    age:50
//   }
// Lesson 6 - How to use Functions - TypeScript
// const likha jabe na cuz amara variable ke reassign korteci tai let likhle reassin korte parbu amara
// let myFunc : Function;
//    myFunc = () =>{
//     console.log('hello');  
// };
// const myFunc =(a : string,b : number, c:string='true') =>{   //c? optional ata atar value dile o hobe na dile o hobe
//     // console.log(c);  
//     // console.log(`Hello ${a} ${b}`);  //return korbe void
// return a+b;   // akhon return type stirng 
// }
// myFunc('shakil', 900 ,"shakil");
// // undefined and void same jinis na  void full empty and undefined has value empty na
//Lesson 7 - Type Aliases 
//akta sting ke likar jonnu barbar lika lagtece same one tar jonnu tai amara bar bar na like amara type aliases korte pari 
//hahahahasahhahahha manus er boro boro nam ke dak nam deoa 
// type stringOrNum = string | number;
// type userType ={name:string; age:number};
// const userDetails = (
//     // id : number | string,
//     // user: {name: string, age: number}
//     id : stringOrNum,
//     user: userType
// ) => {console.log(`Uaer id is ${id}, name is ${user.name}, age is ${user.age}`);
// }
// // const sayHello = (user: {name: string, age: number})=>{
// const sayHello = (user: userType)=>{
//     console.log(`Hello ${user.age> 50 ? "Sir" : "Mr."} ${user.name}`);
// }
//Lesson 8 - Function Signatures - TypeScript 
//no need singular funciton in function 
//Lesson 9 - Classes - TypeScript
// // class er khetreo amara type ta use korte parteci 
// class Player{
//     name: string;
//     age: number;
//     country: string;
//     constructor(n: string, a: number, c:string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){ 
//         console.log(`his name is ${this.name}. the current age  ${this.age} and he from  ${this.country}`);
//     }
// }
// const mashrafi = new Player ('Mashrafi', 40,'Bangladeshi');
// const shakib = new Player ('Shakib',34,'Bangladeshi');
// const player : Player [] = [];
// player.push(mashrafi);
// player.push(shakib);
//Lesson 10 - Access Modifiers 
// class Player{
//     private name: string; //bahir theke access korte parbu na
//     public age: number;   //amara bahir theke change korte parbu
//    readonly country: string; // amara modify korte parbu na only dekle dekte parbu
//     constructor(n: string, a: number, c:string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){ 
//         console.log(`his name is ${this.name}. the current age  ${this.age} and he from  ${this.country}`);
//     }
// }
// const mashrafi = new Player ('Mashrafi', 40,'Bangladeshi');
// const shakib = new Player ('Shakib',34,'Bangladeshi');
// //amra ai object y bahir theke acess nite parteci
// shakib.name ='shakib vai '
// console.log(shakib.name);
// shakib.country ='england';
// shakib.age=31
// console.log(shakib.age);
// const player : Player [] = [];
// player.push(mashrafi);
// player.push(shakib);
// Lesson 11 - Module System - TypeScript
import { Player } from './classes/Player.js';
const mashrafi = new Player('Mashrafi', 40, 'Bangladeshi');
const shakib = new Player('Shakib', 34, 'Bangladeshi');
const shakil = new Player('Shakil', 34, 'America');
//amra ai object y bahir theke acess nite parteci
console.log(shakib.name);
shakib.age = 31;
console.log(shakib.age);
console.log(shakil);
const player = [];
player.push(mashrafi);
player.push(shakib);
