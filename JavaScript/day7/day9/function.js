console.log("linked");
// function demo(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }demo();

//=================Non-parameterized====================
// function employee(){
//     let emp_name="Raj"
//     let emp_id="Emp101";
//     console.log(`The employee name is  ${emp_name} and employee id is $ {emp_id}`);
// }employee()

//!=================Parameterized========================
// function employee(emp_name,emp_id){
//     console.log(`The employee name is  ${emp_name} and employee id is $ {emp_id}`);
// }employee("Raj,EMP101");

// function employee(emp_name,emp_id){
//     console.log(`The employee name is  ${emp_name} and employee id is $ {emp_id}`);
// }employee(prompt("Enter the employee name"),prompt("Enter the employee id"))

//!Anonymous function can be executed by function with Expression

// let demo=function(){ demo}();
//     let a=10;
//     console.log(a);

//! Arrow function 
// let a = ()=>{
//     let a=10
//     console.log(a);
// }
// a();

// Arrow Explicity written 
// let a=()=> {
//     let b=10
//     return b;
// }
// console.log(a());

// Rules of arrow () function
// let demo=()=> console.log("WEB")
// demo();

// let demo=()=>{
//     console.log("WEB")
//     console.log("JS")
// }
// demo();

// let demo=()=>{return 10}
// console.log (demo())

// let demo =()=> {
//     let a=10
//     return a
// }
//  console.log(demo())


// function(){
//     let a=10;
//     console.log(a)
// }
// ()

//  let test=function (){
//     let a=10;
//     console.log(a)
// }
// test()

// !Nested Function
// console.log("nested function")
// function grand_parent(){
//     let gp_p="50acre"
//     let gp_m="80000"
//     console.log(`The grand parent property is ${gp_p}`)
//     console.log(`The grand parent property is ${gp_m}`)
//     function parent(){
//         let p_p="25acre"
//         let p_m="50000"
//         console.log(`The parent property is ${p_p} and ${gp_p}`)
//         console.log(`The parent property is ${p_m}`)
//         function child(){
//             let c_p="10acre"
//             let c_m="25acre"
//             console.log(`The child property is ${c_p}`)
//             console.log(`The child property is ${c_m}`)

//         }
//         return child;
//     }
//     return parent;
// }
//  grand_parent()()();

//! Higher Order Function



