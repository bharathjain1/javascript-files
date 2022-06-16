console.log("welcome to tut6")
 // concatenate

 str  = "This is a string"
 str1 =  str.concat(" "+ "hey"+" "+"boss")
 console.log(str1);
 console.log(str1.length);
 console.log(str1.toLowerCase());
 console.log(str1.toUpperCase());
 console.log(str1[0]);
 console.log(str1.indexOf('his'));
 console.log(str1.lastIndexOf('g'));
 console.log(str1.charAt(6));
 console.log(str1.endsWith('bosss'));
 console.log(str1.includes('boss'));
 console.log(str1.substring(0,9));
 console.log(str1.slice(-9))

 // convert string into array 

console.log(str1.split(' '));
console.log(str1.replace('This','then'));
let my_fruits = ['orange','apple','banana','mango']
console.log(my_fruits[0])
let my_html  = `hello ${my_fruits} is 
                 my fruits none for your
                 ${my_fruits}`;

let  name = "Bharath S jain";

// document.body.innerHTML = my_fruits;
document.body.innerHTML = name;
// document.body.innerHTML = my_html;
