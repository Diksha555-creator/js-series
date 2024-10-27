//Primitive 

//7 types: String, Number , Boolean, null, undefined ,Symbol, BigInt

const score=100
const scoreVAlue=100.5

const ISloggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherid=Symbol('123')
 console.log(id===anotherid);
// const bigNumber=3434546464598786n

//reference (non- primituve)

//array, objects, functions


const heroes =['shaktiman', 'naagraj', 'doga']

let myObj={
    name:"Diksha",
    age:22,
}


const myfundtion= function(){
    // console.log("Hello World");
    
}

//typeof

// console.log(typeof outsideTemp);
// console.log(typeof heroes);
// console.log(typeof id);



//************************************************************************************ */

//stack (Primitive) , Heap( Non-Primitive)

let myYoutubename= "dikshasagardotcom"
let anothername=myYoutubename
anothername= "dikshaDecodes"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo= userOne;
console.log(userOne.email);
console.log(userTwo.email);



