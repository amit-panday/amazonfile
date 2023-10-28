// LOCAL STORAGE
// ?setitem():to store the data in the form of key and value pair.
localStorage.setItem("username","Anand")
localStorage.setItem("password","1234@")


// ?getitem(): to featch the data from key name.
console.log(localStorage.getItem("username"))
console.log(localStorage.getItem("password"))


// ? removeItem():removes the data.
localStorage.removeItem("usrname")
localStorage.removeItem("password")

// ? clear(): the enteries data in the storage
localStorage.clear()

// ! Session Storage

// ? setitem(): to store the data in the from of key and value pair.
sessionStorage.setItem("emp_name","Raj")
sessionStorage.setItem("emp_id","EMP101")

// ? getitem(): ton featch the data from key name.
console.log(sessionStorage.getItem("emp_name"))
console.log(sessionStorage.getItem("emp_id"))

// ? removeitem(): removes the data.
sessionStorage.removeItem("emp_name")

// ? clear(): clears the entire data in the stroge 
sessionStorage.clear()





