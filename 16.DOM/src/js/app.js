// var text = document.getElementById("first");
// var texts = document.getElementsByClassName('demo');
// var h1_tag = document.getElementsByTagName("h1");
// var name_tag = document.getElementsByName("username")[0];

// console.log(name_tag)

// innerHTML
// innerText

var text = document.getElementById("demo");

// text.innerText = "<i>Hello<i>"  == text.textContent
// text.innerHTML = "<i>Hello<i>"

// text.setAttribute("id", "salam")    

// text.id = "salam2"

// text.style.color = "red"

// let p = document.createElement("p")

// let span = document.createElement("span")

// p.innerText = "Front End 1"
// p.setAttribute("class", "test1")

// span.innerText = "Full Stack 1"

// document.getElementById("test").appendChild(p)

// document.getElementById("test").replaceChild(span, p)

// document.getElementById("test").removeChild(p)



// let btn=document.getElementById("btn")

// btn.onclick=function(){
//     console.log("Button Clicked")
// }

// let img1 = document.getElementById("img1")
// let img2 = document.getElementById("img2")
// let img3 = document.getElementById("img3")
// let img3Src = img3.src

// img1.addEventListener("click", function (e) {
//     img3.src = e.target.src
// })
// img1.addEventListener("mouseout", function (e) {
//     img3.src = img3Src
// })

// img2.addEventListener("click", function (e) {
//     img3.src = e.target.src
// })
// img2.addEventListener("mouseout", function (e) {
//     img3.src = img3Src
// })


// let elements=document.querySelectorAll(".query")
// console.log(elements)


let red=document.getElementById("red")
let yellow=document.getElementById("yellow")
let green=document.getElementById("green")


// red.addEventListener("click",function(e){
//     console.log("red")
//     e.stopPropagation()
// })
// yellow.addEventListener("click",function(e){
//     console.log("yellow")
//     e.stopPropagation()
// })
// green.addEventListener("click",function(e){
//     console.log("green")
//     e.stopPropagation()
// })

console.log(red.lastElementChild)