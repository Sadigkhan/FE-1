// console.log("hello world");
// console.error("hello world");
// console.warn("hello world");




// // 2. Variables

// // var, let, const

// var ad="Ferid";

// console.log(ad);

// ad="Firuz";

// console.log(ad);


//Data Types

//Primitive Types
//String
// var ad="Ferid"; 
// console.log(typeof ad);
//number
// var yas=30;
// console.log(typeof(typeof yas));
// console.log(typeof yas);
//boolean
// var evli=true;
// console.log(typeof evli);
//null
// var bos=null;
// console.log(typeof bos);

//undefined
// var a;
// console.log(typeof a);


//Reference Types & Non-Primitive Types
//Objects

// let person={
//     ad:"Adrew",
//     soyad:"Tate",
//     yas:24,
//     evli:false,
//     sevgili:"JS",
//     adress:"Ehmedli",
//     birthYear:function(){
//         return new Date().getFullYear()-this.yas;
//     }

// }

// console.log(person.birthYear());
//arrays
// var nums=[1,2,3,4,5,6,7,8,9,10];
// var nums2=new Array(1,2,3,4,5,6,7,8,9,10);
// var nums2=[[1,2,3],[4,5,6],[8,9]]
// console.log(nums2[0]);
// console.log( nums[nums.length-1]);
//functions

// function LightMode(){
//     // document.body.style.backgroundColor="white";
//     // document.body.style.color="black";
// document.getElementById("lamp").style.filter="grayscale(0)"
// }
// function DarkMode(){
//     // document.body.style.backgroundColor="black";
//     // document.body.style.color="white";
// document.getElementById("lamp").style.filter="grayscale(1)"

// }

// document.getElementById("user-name").innerHTML="<i>Ferid</i>";
// document.getElementById("username").innerText="<i>Ferid</i>";

// document.write("Hello World");


// alert("Hello World");
// prompt("Adinizi daxil edin");
// confirm();


//Operators

//Aritmetik operatorlar
// let a=10;
// let b="3";
// console.log(a%b);


// let a=10;
// let b= "10";

// console.log(0.2+0.3==0.5);

// let a=10;
// let b="1";
// if(a!==b)
// {
//     console.log("hi");
// }
// else{
//     console.log("bye");
// }


//turnary operator
// let a=10;
// let b=10;
// if(a==b){
//     console.log("hi");
// }
// else{
//     console.log("bye");
// }
// console.log(a==b ? "hi":"bye");

// let pi =Math.PI

// console.log(Math.floor(Math.random()*100));


// function Random(){
//     let random=Math.floor(Math.random()*100);
//     document.getElementById("number").innerHTML+=random +"\n";
// }


const fruits = document.getElementsByClassName('fruits');
const fruits2 = document.querySelectorAll('.fruits');
console.log(fruits);
console.log(fruits2);
// fruits.item(0).classList.add(‘fruit__01’)