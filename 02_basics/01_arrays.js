//arrays


// const myArr=[1,2,3,4,5,'true',"Diksha"]
const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","batman","spiderman"]

const myarr2=new Array(1,2,3,4)
// console.log(myArr[1]);

//Array methods

myArr.push(6);
myArr.push(7);

myArr.pop();

// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
//  myArr.shift(9);
//  console.log(myArr);

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(2));
 
 
const newArr= myArr.join();      //join binds the array and also coveerts it into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// Slice , Splice


console.log("A",myArr);

const myn1= myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);

const myn2= myArr.splice(1,3);     // the original array also gets changed in splice
console.log("c",myArr);
console.log(myn2);
