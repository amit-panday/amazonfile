console.log("Linked");
// / collect employee name, employee id, employee designation and store it in Array
// after collect email, phone number and generate password  [@email4#123phoneno4]
// after this add all the emp info in an 1 Array
// take 3 employee details and add it in one array

// function employee_details()
// {
//     let emp_arr = [];
//     let employee_details=[];
//     for(let i=0 ; i<3 ; i++)
//     {
//         let emp_name = prompt("Enter the name of employee")
//         let emp_id = prompt("Enter the employee id")
//         let emp_designation = prompt("Enter the Employee Designation")
//         emp_arr.push(emp_name,emp_id,emp_designation);
//         let emp_email = prompt("Enter the email of employee")
//         let emp_phno = prompt("Enter the employee mobile number")
//         let password =(emp_email.substring(0,4).concat("#123",emp_phno.slice(-4))).padStart(13,"@");
//         emp_arr.unshift(emp_email,emp_phno,password);
//         employee_details.push(emp_arr);
//         emp_arr=[];
//     }
//     console.log(employee_details)
// }
// employee_details();


// take [[ename, eid ,email,phno,des[ase],sal[50000],[ename, eid ,email,phno,des[ase],sal[50000],[ename, eid ,email,phno,des[ase],sal[50000]]
// [[company name,ename, eid ,email,phno,des[sse],sal[70000],[company name,ename, eid ,email,phno,des[sse],sal[70000],[company name,ename, eid ,email,phno,des[sse],sal[70000]]


// let arr = [10,20,30,40,50,60,70,80];
// using higher order method
// fetch aelements of an array and add 15 in each elements
// filter elements which are> 35
// convert the entire array elements into single value
// iterate only new employee details using for of loop


// !for - of loop iterates elements of an array
// const arr = ["HTML","CSS","JS","CORE JAVA","SQL","JDBC","HIBERNATE"];
// for(let element of arr)
// {
//     console.log(element);
// }

// // !for - in loop iterates index value of each elements of an array
// for(let element in arr)
// {
//     console.log(element);
// }





// ! 1st way
// let obj = {
//     name : "vaishnavi",
//     id : 123,
//     address : {
//         city : "banglore",
//          starte : "Karnataka"
//     }
// }

// 2nd way - using Object.create()
// let obj = Object.create({Name : "Vaishnavi", id:123})
// console.log(obj)

// 3rd way - using new Object
// let obj = new Object({Name : "Vaishnavi", id:123})
// console.log(obj)

// 4th way
// let obj1 = {
//     Name : "vaishnavi",
//     id : "tybvdk"
// }
// let obj = Object.assign({},obj1)
// console.log(obj)

// 5th way
// let obj = structuredClone({Name :"vaishn", id:123})
// console.log(obj)

// 6th way Constructor function
// function obj(Name, id ,salary,company)
// {
//     this.Name=Name;
//     this.id=id;
//     this.salary=salary;
//     this.company=company;
// }
// let obj1 = new obj("vaishn",123,40000,"infosys")
// console.log(obj1);
// let obj2 = new obj("ravina",125,50000,"atkins")
// console.log(obj2);


// let obj = {
//     Name : "Vaishnavi",
//     id : 190,
//     salary : 50000,
//     company : "IBM"
// }
// // console.log(obj)
// // ! update the value of object
// obj.Name="ravina";
// console.log(obj)
// // ! insert the value into object
// obj.city = "Belgaum";
// console.log(obj)
// // ! delete the value of object
// delete obj.city;
// console.log(obj)




//let employee = {
    //     ename : "Raju",
    //     eid : "EMP101",
    //     edes : "ASE",
    //     gross_sal : 50000,
    //     deduction : 6000,
    //     ecompany : ["infosys","Bangalore"],
    //     net_sal : function(){
    //         console.log(`The employee salary is ${this.gross_sal-employee.deduction}`)  
    //     },
    //     emp_address : {
    //         city : "Bangalore",
    //         State : "Karnataka"
    //     }
    // }
    // console.log(employee)   //{ename: 'Raju', eid: 'EMP101', edes: 'ASE', gross_sal: 50000, deduction: 6000, …}
    // console.log(employee.edes)
    // employee.net_sal();     //The employee salary is 44000
    // console.log(employee.ename)  //Raju
    // console.log(employee["eid"])    //EMP101
    
    // ! FETCH :
    // let obj = {
    //     1 : "ram",
    //     2 : "emp10",
    //     3 : "ase"
    // }
    // console.log(obj);       // {1: 'ram', 2: 'emp10', 3: 'ase'}
    // // console.log(obj.1);  Uncaught SyntaxError: missing ) after argument list (at Object.js:29:13)
    // console.log(obj["1"]);     // ram
    // console.log(obj[1]);     // ram
    
    // ! UPDATING : the value of property
    // employee.edes="SSE";
    // console.log(employee)
    
    // ! REMOVE : the property of the object
    // delete employee.edes;
    // console.log(employee)
    
    // ! ADDING : PROPERTIES IN OBJECT
    // employee.ecompany.push("karnataka");
    // console.log(employee.ecompany)
    
    // How we can performe array methods when the value is in the form of an array
    // console.log(employee);
    // console.log(employee.ecompany);
    // employee.ecompany.pop();
    // console.log(employee.ecompany);
    
    
    // ASSIGNMENT : CREATE A OBJECT OF PRODUCT
    // STRING, NUMBER, ARRAY, OBJECT, OBJECT METHOD => FINAL AMT = DISCOUNT + MRP
    
    
    // MULTIPLE WAYS TO OF CREATING OBJECT IN JAVASCRIPT
    // ! 1st way : literals
    // let obj = {
    //     name : "vaishnavi",
    //     id : 123,
    //     address : {
    //         city : "banglore",
    //          starte : "Karnataka"
    //     }
    // }
    
    // 2nd way - using new keyword Object
    // let obj = new Object({Name : "Vaishnavi", id:123})
    // console.log(obj)
    // let obj = new Object()
    // Object.Name = "Vaishnavi"
    // console.log(obj)
    
    // 3rd way - Constructor function
    // function obj(Name, id ,salary,company)
    // {
    //     this.Name=Name;
    //     this.id=id;
    //     this.salary=salary;
    //     this.company=company;
    // }
    // let obj1 = new obj("vaishn",123,40000,"infosys")
    // obj1.__proto__.city ="Bangalore"
    // console.log(obj1);
    // let obj2 = new obj("ravina",125,50000,"atkins")
    // console.log(obj2);
    // console.log(obj1.city)
    // console.log(obj2.city)
    // obj.prototype.state="Karnataka"
    // console.log(obj1);
    // console.log(obj2);