
// !function deceleration
// function on_key_down_funct(){
//     let input_field=document.querySelector("input")
//     input_field.style.
//     backgroundColor="red"
//     input_field.style.fontSize="20px"
// }

// function deceleration
function on_key_down_funct(){
    let input_field=document.querySelector("input")
    input_field.style.
    backgroundColor="red"
    input_field.style.fontSize="20px"
}
input_field.addEventListener("keydown",on_key_down_funct)

// !using addEventListener with the event and function deceleration 
let input_field=document.querySelector("input");
input_field.addEventListener("keydown",()=>{
    input_field.style.background="green"
})

input_field.addEventListener("keyup",()=>{
    input_field.style.background="red"
})