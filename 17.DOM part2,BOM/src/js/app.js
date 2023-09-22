// let first=document.getElementById("first")
// let first2=window.document.getElementById("first")
// console.log(first2)



// setInterval(SayHello,2000)

// setTimeout(SayHello,4000)

// function SayHello(){
//     console.log("Salam")
// }


// let myVar = setInterval(myTimer, 1000);
// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


let menu_btn = document.querySelector("#Header .container .all .right .menu-icon-btn");

let menu_dropdown = document.querySelector("#Header .container .all .dropdown");

menu_btn.addEventListener("click", function() {
    menu_dropdown.classList.toggle("active");
})

// menu_btn.addEventListener("click", function() {
//     if(menu_btn.classList.contains("active")){
//         menu_btn.classList.remove("active");
//     }else{
//         menu_btn.classList.add("active");
//     }
// })

let dropdown_items = document.querySelectorAll(".dropdown-item")

dropdown_items.forEach(element => {
    element.addEventListener("click", function() {
        element.querySelector(".bottom").classList.toggle("active")
        element.querySelector(".top i").classList.toggle("active")
    })
})