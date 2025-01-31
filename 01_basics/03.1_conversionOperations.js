// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2>1);
// console.log(2<1);

console.log("2">1);
console.log("02">1);


console.log(null>0);        //these conversions cause problems cause null can convert into nan or 0
console.log(null==0);     
console.log(null>=0);
/*the reason for them to give different output is that that the comparison operator (>=,=<,<,>)
and the equality check (==) work differntly in js */

console.log(undefined>0);      
console.log(undefined<0);
console.log(undefined==0);
//these are also similar to null although the oupput is always false and shall be avoided

// strict check (===), not only checks the valuae but also datatype
console.log("2"===2);
