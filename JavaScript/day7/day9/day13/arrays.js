console.log("Linked")

// !Array Literals
// const arr=["Raj","Ram","Geetha"];
// console.log(arr)

//! New Keyword==> array constructor
// const arr1=new Array("Raj","Ram","Geetha");

// !Push




// !Pop




// !Shift






// !Unshift







// !slice
// let arr=[10,20,30,40];
// console.log(arr.slice(2,4));

// !splice()
// let arr=[10,20,30,40,50];
// arr.splice(2,2,"a","b","c");
// console.log(arr);

// 7)Higher order function method
// console.og("Higer Order function and call back function");
// function cbf(){
//     console.log(" It's call back function");
// }
// function hof(call_back){
    // console.log("It's higher order function");
    // call_back();
// }
// hof(cbf);

// console.log("Higher Order function and call back function");
// function hof(a,b,add){
//     let result =add();
//     console.log(result);
// }
// hof(10,20,(a,b)=>{return a+b});

// 8)IIEF function (Imidiate Invoke);
// (function(){
//     let a=20;
//     let b=30;
//     console.log(a+b);
// })
// ();
// 9) Recursive function:
// let i=5;
// function demo(content){
//     console.log(content);
//     i=i-1;
//     if(i>0)
//     {
//         demo("JS");
//     }
// }
// demo("JS");
// 10) Generation Function:
function * Generation()
{
    console.log("Statement declared before the first yield");
    yield 1;
    console.log("Statement decleared before the second yield");
    yield 2;
    console.log("Statement decleared before the third yield");
    yield 3;
}
let demo=Generation();
console.log(demo.next());
console.log(demo.next());
console.log(demo.next());

