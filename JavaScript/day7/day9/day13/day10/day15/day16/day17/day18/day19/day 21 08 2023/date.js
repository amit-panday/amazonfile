// let date=new Date();
// console.log (date)
// console.log (date.getDate())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// Date
// Date(year,month,date,hour,min,sec,ms)
// Date(year,month,date,hour,min,sec,)
// Date(year,month,date,hour,min)
// Date(year,month,date,hour)
// Date(year,month,date)
// Date(year,month)

// let date=new Date(2023,7,21,12,58,46,789);
// console.log(date)
// let date1=new Date(2022,9,15,10,18,16,569);
// let date1=new Date(2022,9,15,10,18,16);
// let date1=new Date(2022,9,15,10,18);
// let date1=new Date(2022,9,15,10);
// let date1=new Date(2022,9,15);
// let date1=new Date(2022);
// let date1=new Date (2022);
// console.log(date1)

// function time(){
//     let date = new Date();
//     document.getElementById
//     ("timer").innerHTML=date.toTimeString().slice(0,9)
// }
// time()
// setInterval(time,1000)
// setTimeout(time,1000)

// function run(){
//     setTimeout(time,1000)
// }

// let date=new date();
// console.log(date.getmonth())


function date_function(){
    let date=new Date;
    let month=["Jan","Feb","Mar","April","May","June","July","August","September","Octob","Nov","Dec"]
    let disp=document.getElementById("date_function");
    disp.innerHTML=`${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
    console.log(date)
}
date_function()
















