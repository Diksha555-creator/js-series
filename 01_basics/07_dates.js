//Date

let mydate= new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

// let myCreatedDate= new Date(2023,0,23)     //months start from 0
// console.log(myCreatedDate);

// let myCreatedDate= new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate= new Date("2023-01-14")
// let myCreatedDate= new Date("2023-01-14")   //indian format
// console.log(myCreatedDate.toLocaleString());


let myTimestamp= Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));   //to remove decimal


let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


// ${newDate.getDay()} and the time is

newDate.toLocaleString('default',{
    weekday:'long'
})