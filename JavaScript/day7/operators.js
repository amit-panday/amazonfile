// console.log("linked");

// let sub1=Number(prompt("Enter the subject 1 marks"));
// let sub2=Number(prompt("Enter the subject 2 marks"));
// let sub3=Number(prompt("Enter the subject 3 marks"));
// let sub4=Number(prompt("Enter the subject 4 marks"));
// let sub5=Number(prompt("Enter the subject 5 marks"));
// let sub6=Number(prompt("Enter the subject 6 marks"));
// let total=(sub1+sub2+sub3+sub4+sub5+sub6)/600*100;
// document.write(`The result is ${total}`)

// console.log(10+10+"300")
// let a="100";
// let b="60";
// console .log(a*b);
// let c ="40";
// let d="20";
// console .log(c-d);



// let sub1=Number(prompt("enter the sub1 marks"));
// let sub2=Number(prompt("enter the sub2 marks"));
// let sub3=Number(prompt("enter the sub3 marks"));
// let sub4=Number(prompt("enter the sub4 marks"));
// let sub5=Number(prompt("enter the sub5 marks"));
// let sub6=Number(prompt("enter the sub6 marks"));
// let total=(sub1+sub2+sub3+sub4+sub5+sub6)/600*100;
// document.write(`The result is ${total}`);


// using aasignment operator write JS program amount based on km
// let car=100;
// let bike=40;
// let auto=50;
// let vehicle=prompt("enter the vehicle (car/auto/bike)");
// let km=prompt("enter the km");
// let per_km;
// if(vehicle=="car"){
//     per_km=20;
//     car+=per_km*km;
//     document.write(`<h1>For ${vehicle} and for ${km} km the amount is ${car}</h1>`)
// }
// else if(vehicle=="auto"){
//     per_km=10;
//     auto+=per_km*km;
//     document.write(`<h1>For ${vehicle} and for ${km} km the amount is ${auto}</h1>`)
// }
// else if(vehicle=="bike"){
//     per_km=5;
//     bike+=per_km*km;
//     document.write(`<h1>For ${vehicle} and for ${km} km the amount is ${bike}</h1>`)
// }
//  else{
//     alert("Invalid input")
//  } 

// let bill=prompt("enter the bill amount");
// let discount;
// if(bill>=5000 && bill<=10000){
//     discount=bill*0.1;
//     bill-=discount
//     document.write(`<h2> The bill amount is ${bill}</h2>`)
// }
// else if(bill>=10000){
//     discount=bill*0.2;
//     bill-=discount
//     document.write(`<h2> The bill amount is ${bill}</h2>`)
// }

//!Ternary operator
//let dose= prompt("Enter the dosage (1 / 2 / booster)");
//(dose=="1")?alert("Take dosage 2"):(dose=="2")?alert("Take booster dosage"):(dose=="booster")?alert("Take Precaution"):alert("Invalid input");

//Today 30/06/2023

// let a=56;
// let b="56"
// console.log(a)
// console .log(typeof a) // number
// console.log(b)
// console.log(typeof b)// string

// console.log(a==b) //true
// console.log(a===b)//FALSE


let otp=""
for(let i=0; i<4; i++){
    otp+=Math.floor(Math.random()*10);
}
alert (`The OTP is ${otp}`)
let password=Number(otp);
let user_data=prompt("Enter the OTP");

//For equal to operator ==
// if(user_data==password){
//     alert("Correct otp")  //output
// }else{
//     alert("Wrong otp")
// }

//!for strictly equal to operator===
// if(user_data==password){
//     alert("correct otp")
// }else{
//     alert("Wrong otp");
// }

























