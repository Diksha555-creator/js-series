const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes=marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);


//++++++++ concat still comes with some liimtions hence spread is mostly preferred++++++++++++++
// const all_newheroes=[...marvel_heroes,...dc_heroes];
// console.log(all_newheroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanother_array=another_array.flat(Infinity)
console.log(realanother_array);


//+++++To check for element in array+++++
console.log(Array.isArray("Diksha"));

//+++++++ To convert into an array+++++++
console.log(Array.from("diksha"));
console.log(Array.from({name:"diksha"}));     //interesting case , doesnt know if key also has to be converted

//Another way of converting into array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
