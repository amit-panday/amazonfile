console .log ("javascript");
// let arr=[10,20,30,40,50];
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]+"@")
// }

// Map
// let arr=[10,20,30,40,50];
// arr.map(ele,index,array)=>{
//     console.log(ele,index,array);
// }
// arr.map((a)=>{
//     console.log(a+"@")
// })

// !Filter
// let arr =[10,20,30,40,50];
// let a=arr.filter((a)=>{
//     return a>20;
// })
// console.log(a);

// Map() with filter()
// let arr=[10,20,30,40,50];
// let a=arr.map((a)=>
// {
//     return a+b;
// })
// console.log(a);

// reduce
// const arr=[10,20,30,40,50];
// let a=arr.reduce((a,b)=>
// {
//     return a+b;
// })
// console.log(a);

// Sort()
// Ascending Order :
// let a=["Amit","vaishu","Savita","Siya","Rehan"]
// console.log(a.sort());

// Descending Order :
// let arr=[10,76,98,79,9];
// console.log(arr.sort((a,b)=>
// {
//     return b-a;
// }))

// find ()
// const arr=[10,20,30,40,50];
// console.log(arr.find((a)=>
// {
//     return a>20;
// }));
// console.log(arr.findIndex((a)=>
// {
//     return a>20;
// }))

// some()
// const arr=[10,20,30,40,50];
// console.log(arr.some((a)=>
// {
//     return a>40;
// }))


// Every()
// const arr=[10,20,30,40,50];
// console.log(arr.every((a)=>
// {
//     return a>20
// }))

// forEach()
 const arr= [10,20,30,40,50];
// arr.forEach((ele,ind,array)=>
// {
//     console.log(ele,ind,array)
// });

console.log("map()")
let a = arr.map((ele)=>
{
    return ele;
})
console.log(a)