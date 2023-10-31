//DRY - Don't Repeat Yourself
// function getDetails(name,age,city){
//     console.log(`Name: ${name} Age: ${age} City: ${city}`)
// }


// let human={
//     getDetails:function(adress,phoneNumber,surname){
//         console.log(`Name: ${this.name} Age: ${this.age} City: ${this.city} Adress:${adress} PhoneNumber:${phoneNumber} Surname:${surname}`)
//     }
// }

// let person={
//     name:"John",
//     age:30,
//     city:"New York",
   
// }
// let person1={
//     name:"Mary",
//     age:30,
//     city:"New York",
//     getDetails:function(){
//         console.log(`Name: ${this.name} Age: ${this.age} City: ${this.city}`)
//     }
    
// }
// let person2={
//     name:"Fatime",
//     age:30,
//     city:"New York",
// }

// person1.getDetails.bind(person2)()

// let anotherPerson=person1.getDetails.bind(person2);
// anotherPerson()

// human.getDetails.call(person2,"Central Park","123456789","Doe")
// human.getDetails.apply(person1,["Central Park","123456789","Doe"])
// person.getDetails();
// person1.getDetails();
// person2.getDetails();
// person1.getDetails()
// setTimeout(person1.getDetails.bind(person1),2000)


//XMLHttpRequest - XHR

let btn=document.querySelector("#btn");
let output=document.querySelector("#output");

btn.addEventListener("click",function(){
    
    let xhr=new XMLHttpRequest();
    // console.log(xhr);
    //github users api
    xhr.open("GET","https://api.github.com/users");

    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            let users=JSON.parse(this.responseText);
            console.log(users);
            let outputText="";
            users.forEach(user => {
                outputText+=`<li>${user.login}</li>
                <img src="${user.avatar_url}" alt="avatar" width="100px" height="100px">
                <a href="${user.html_url}">Link</a>
                `
            });
            output.innerHTML=outputText;
        }
    }
    xhr.send()
    
})