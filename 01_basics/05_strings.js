const name="Dikshaa"
const repoCount=50

// console.log(name+repoCount+" Value");

// console.log(`Hello my name is ${ name} and my repo count is ${repoCount}`);

const gamename= new String('Dikshaa-Sr')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));


const newString=gamename.substring(0,4)
console.log(newString);

const anotherString=gamename.slice(-8,4)
console.log(anotherString);

const newsstringone="   Diksha   "
console.log(newsstringone);
console.log(newsstringone.trim());

const url="https://Dikshaa.com/diksha%20sagar"
console.log(url.replace('%20','-'));
console.log(url.includes('Diksha'));
console.log(url.includes('sundar'));

console.log(gamename.split('-'));




