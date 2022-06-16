 console.log(" tuts 5 and we are discussing about arrays")
 let marks  = [90,99,89,88,97,96];
 const fruits  = ['apple','mango','banana','papaya'];
 const mixed  = ['str',99,"boss",[78,90]];

 const arr = new Array(12,11,22);
//  console.log(arr);
//  console.log(mixed)
//  console.log(fruits);
//  console.log(Array.isArray("arrtt"));
//  arr[0] = 90;
//  console.log(arr[0]);
// let value  =  marks.indexOf(99);
// console.log(value)
// marks.push(999);
// marks.unshift(111);
// marks.shift();
// console.log(marks);
// marks.splice(1,3);
console.log(marks);
console.log(marks.reverse());
let marks1 = [12,11,23,12,111];
marks  = marks.concat(marks1);
console.log(marks);

let myobj  = {
    "name":"Bharath",
    "age":"M",
    "games":"cricket",
    "colors":['red','yellow','blue'],
}
console.log(myobj.colors[1]);