// var numbers = [[1, 2], [3, 4], [5, 6, [7, 8, [9, 10,[11,12,[13,14]]]]]];
// var flatArray = numbers.flat(Infinity);

// console.log(flatArray);

// const person={
//     name:"Murad",
//     surname:"Memmedov",
//     // getFullName:function(){
//     //     return this.name+" "+this.surname
//     // },
//     getFullName2: function(){
//         return (function(){
//             alert(`${this.name} ${this.surname}`)
//         })
//     }

// }

// let user={
//     firstName:"Nihad",
//     sayHi:function(){
//         return(function(){
//             alert(`Salam ${this.firstName}`)
//         })
//     }
// }

// user.sayHi()();


let user = {
    firstName: "Nihad",
    sayHi: function () {
        return (function () {
            return (function () {
                alert(`Salam ${this.firstName}`)
            })
        })
    }
}

let user2 = {
    firstName: "Vusal",
    sayHi: function () {
        return (() => {
            alert(`Salam ${this.firstName}`)
        })
    }
}

// user2.sayHi().call(user);

user.sayHi.call(user2)();

// user.sayHi.call(user)
// user.sayHi.call(user)

// console.log(person.getFullName())
// person.getFullName2()



//  person.getFullName2.call(person)
// function second(){
//     return ()=>console.log(this)
// }
// const btn1=document.getElementById("one");
// const btn2=document.getElementById("two");

// btn1.addEventListener('click',first);
// btn2.addEventListener('click',second());

// function first(){
//     console.log(this)
// }