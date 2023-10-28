console.log("Linked string ");
let str = "JavaScript";
// ! Length property : to find the length of a string (length count start from 1)
console.log(str.length);

// ! toUpperCase() method : to convert the string into uppercase
console.log(str.toUpperCase());

// ! toLowerCase() method : to convert the string into lowercase
console.log(str.toLowerCase());

// ! slice(start index, end index) : the start index include and end index excludes
console.log(str.slice(1,5)); //avaS
console.log(str.slice(5)); //cript
console.log(str.slice(-4)); //ript
console.log(str.slice(-6,-3)); //Scr

// !substring (start index, end index) : the start index include and end index excludes
// doesn't supports negative values but default the value will be considered as 0 
console.log(str.substring(1,5)); //avaS
console.log(str.substring(5)); //cript
// console.log(str.substring(-4)); //JavaScript -> by default it is considered as 0 -> it return full string

// !substr(start index, length)
console.log(str.substr(5,3)); //cri

// !replace() :
let str1 = "My students are good, with good knowledge and good skills"
console.log(str1.replace("good","best")); //My students are best, with good knowledge and good skills
console.log(str1.replace(/Good/i,"best")); // My students are best, with good knowledge and good skills
console.log(str1.replace(/good/g,"best")); //My students are best, with best knowledge and best skills

// !replaceAll() :
console.log(str1.replaceAll("good","best")); //My students are best, with best knowledge and best skills

// !padStart() : adding string character in starting position of the string
let str2 = "Raj";
console.log(str2.padStart(4,"@")) // @Raj
console.log(str2.padStart(5,"@")) // @@Raj

// !padEnd() :
console.log(str2.padEnd(4,"@")) // Raj@

// concat() :
let str3 = "Raj"
let str4 = "Ram"
console.log(str3.concat(str4)); //RajRam
console.log(str3.concat("@123",str4)) //Raj@123Ram

// !split() : converts string to an array based on the specified value within the method
let str5 = "JavaScript"
console.log(str5.split()) //['JavaScript']
console.log(str5.split("")) //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let str6 = "Java Script"
console.log(str6.split(" ")) //['Java', 'Script']


// Assignment
// let string = "   JavaScript   ";
// console.log(string.length);
// console.log(string.trim())
// console.log(string.length);
// console.log(string.trimStart())
// console.log(string.length);
// console.log(string.trimEnd());
// console.log(string.length);


// ! Generating string type password
// let email = "pandeyamitkumar1947@gmail.com"
// let phone_num = "8090401856"
let email = prompt("Enter the email address")
let phone_num = prompt("Enter your phone number")
let password = (email.substring(0,4).concat(phone_num.slice(-4))).padStart(9,"@");
alert(`The password is ${password}`)


// collect employee name, employee id, employee designation and store it in Array
// after collect email, phone number and generate password  [@email4#phoneno4]
// after this add all the emp info in an 1 Array
// take 3 employee details and add it in one array

