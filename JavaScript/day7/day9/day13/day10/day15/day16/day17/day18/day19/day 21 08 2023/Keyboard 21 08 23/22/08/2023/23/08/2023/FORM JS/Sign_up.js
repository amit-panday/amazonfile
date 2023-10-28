// ! LOCAL STORAGE
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(username,password)
    if (username == "" || password == "") {
        alert("Both the field should be filled")
    } else if (username != "" && password != "") {
        localStorage.setItem("UserName", username)
        localStorage.setItem("PassWord", password)
        confirm("Registered Successfully")
        window.open("Login.html")
    }
})

// ! SHOW PASSWORD
function show_pwd() {
    let password = document.getElementById("password");
    if (password.type == "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}

// ! WARNING AND SUCCESS MESSAGE
let username = document.getElementById("username")
username.addEventListener("keyup", () => {
    let validation = username.value.length <6;
    let error_msg1 = document.getElementById("error_msg1")
    let submit_btn=document.getElementById("submit_btn")
    if (validation == true) {
        username.classList.add("warning")
        username.classList.remove("success")
        error_msg1.innerHTML="Username should be above 6 characters"
        submit_btn.disabled=true;
        submit_btn.classList.add("disabled")

    } else {
        username.classList.add("success")
        username.classList.remove("warning")
        error_msg1.innerHTML=""
        submit_btn.disabled=false;
        submit_btn.classList.remove("disabled")
    }
})


let password = document.getElementById("password")
password.addEventListener("keyup", () => {
    let validation = password.value.length <6;
    let error_msg2 = document.getElementById("error_msg2")
    let submit_btn=document.getElementById("submit_btn")
    if (validation == true) {
        password.classList.add("warning")
        password.classList.remove("success")
        error_msg2.innerHTML="Username should be above 6 characters"
        submit_btn.disabled=true;
        submit_btn.classList.add("disabled")

    } else {
        password.classList.add("success")
        password.classList.remove("warning")
        error_msg2.innerHTML=""
        submit_btn.disabled=false;
        submit_btn.classList.remove("disabled")
    }
})