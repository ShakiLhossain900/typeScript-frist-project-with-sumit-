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

// i will do this in the next time


