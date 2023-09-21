// // // //foreach
// // // const arr = [1, 2, 3, 4, 5];
// // // // arr.forEach((number) => {
// // // //   console.log(number);
// // // // });

// // // //for loop

// // // // for(let i=0;a<arr.length;a++){
// // // //     console.log(arr[a]);
// // // // }

// // // // for (const item of arr) {
// // // //     console.log(item);
// // // // }

// // // //for in
// // // // for (let index in arr) {
// // // //     console.log(arr[index]);
// // // // }
// // // // let person={
// // // //     ad:"Elvin",
// // // //     soyad:"Memmedov",
// // // //     yas:20
// // // // }

// // // // console.log(person.ad);
// // // // console.log(person["ad"]);
// // // // let ad="ad"
// // // // let a="a";
// // // // let d="d";
// // // // // let ad=a+d;
// // // // console.log(person[ad]);

// // // // const person={};
// // // // console.log(person);
// // // // person.ad="Elvin";
// // // // person.soyad="Memmedov";
// // // // console.log(person.ad)


// // // // const person=new Object();
// // // // person.ad="Elvin";
// // // // person.soyad="Memmedov";
// // // // console.log(person.ad)
// // // // let x=person;
// // // // x.ad="Elvin2";
// // // // console.log(person.ad);

// // // // for(let key in person){
// // // //     console.log(person[key]);
// // // // }
// // // // let newObject=Object.assign({},person)
// // // // newObject.ad="Elvin2";
// // // // console.log(newObject.ad)

// // // // let number=new Number(10);

// // // //while
// // // // let i = 0;
// // // // while (i < arr.length) {
// // // //     console.log(arr[i]);
// // // //     i++;
// // // // }

// // // //do while
// // // // let i = 0;
// // // // do {
// // // //     console.log(arr[i]);
// // // //     i++;
// // // // }
// // // // while (i < arr.length);


// // // //Objects are mutable
// // // // let person = {
// // // //     ad: "Elvin",
// // // //     soyad: "Memmedov",
// // // //     getFullName: function () {
// // // //         return this.ad + " " + this.soyad;
// // // //     }
// // // // }

// // // // person.city = "Baku";
// // // // person["yas"] = 20;
// // // // let x=person;
// // // // x.yas=person.yas.toString();
// // // // x.yas=Number(x.yas);
// // // // console.log(person)

// // // // delete person.city;
// // // // delete person.getFullName;
// // // // console.log(person)

// // // // let x=person;
// // // // x.ad="Elvin2";
// // // // console.log(person.ad);
// // // // console.log(x.ad);


// // // // myObj = {
// // // //     name:"John",
// // // //     age:30,
// // // //     cars: {
// // // //       car1:"Ford",
// // // //       car2:"BMW",
// // // //       car3:"Fiat"
// // // //     },
// // // //     getFullName:function(){
// // // //         return this.name+" "+this.age;
// // // //     }

// // // //   }

// // // //   console.log(myObj.getFullName())

// // // // function ThisDefiner(){
// // // //     console.log(this);
// // // // }

// // // // ThisDefiner();





// // // // let btn1=document.getElementById("one");
// // // // let btn2=document.getElementById("two");

// // // // function First(){
// // // //     console.log(this);
// // // // }

// // // // let Second=()=>{console.log(this)}

// // // // btn1.addEventListener("click",First)
// // // // btn2.addEventListener("click",Second)


// // // // let person={
// // // //     ad:"Elvin",
// // // //     soyad:"Memmedov",
// // // // }
// // // // person.getFullName = function () {
// // // //     return this.ad + " " + this.soyad;
// // // //   };

// // // //     console.log(person)
// // // //     let myString=JSON.stringify(person);
// // // //     console.log( myString);
// // // //     let myObject=JSON.parse(myString);
// // // //     console.log(myObject);



// // // // let person={
// // // //     ad:"",
// // // //     soyad:"",
// // // //     set setAd(ad){
// // // //         if(ad.trim().length>2){
// // // //             this.ad=ad;
// // // //         }
// // // //         else{
// // // //             console.log("Ad 2 herfden boyuk olmalidir")
// // // //         }
// // // //     },
// // // //     get getAd(){
// // // //         return this.ad;
// // // //     },
// // // //     set setSoyad(soyad){
// // // //         if(soyad.trim().length>2){
// // // //             this.soyad=soyad;
// // // //         }
// // // //         else{
// // // //             console.log("Soyad 2 herfden boyuk olmalidir")
// // // //         }
// // // //     },
// // // //     get getSoyad(){
// // // //         return this.soyad;
// // // //     },

// // // //     getAdSoyad:function(){
// // // //         return this.ad+" "+this.soyad;
// // // //     }

// // // // }

// // // // person.setAd="Elvin";
// // // // person.setSoyad="Memmedov";
// // // // console.log(person.getAdSoyad());
// // // // Object.freeze(person);
// // // // person.setAd="Elvin2";
// // // // person.setSoyad="Memmedov2";
// // // // console.log(person.getAdSoyad());


// // // // Define object
// // // const obj = {counter : 0};

// // // // Define setters and getters
// // // Object.defineProperty(obj, "reset", {
// // //   get : function () {this.counter = 0;}
// // // });
// // // Object.defineProperty(obj, "increment", {
// // //   get : function () {this.counter++;}
// // // });
// // // Object.defineProperty(obj, "decrement", {
// // //   get : function () {this.counter--;}
// // // });
// // // Object.defineProperty(obj, "add", {
// // //   set : function (value) {this.counter += value;}
// // // });
// // // Object.defineProperty(obj, "subtract", {
// // //   set : function (value) {this.counter -= value;}
// // // });

// // // // Play with the counter:
// // // obj.reset;
// // // obj.add = 5;
// // // obj.subtract = 1;
// // // obj.increment;
// // // obj.decrement;
// // // obj.add=10;
// // // console.log(obj);


// // // function Person(first, last, age, eye) {
// // //     this.firstName = first;
// // //     this.lastName = last;
// // //     this.age = age;
// // //     this.eyeColor = eye;
// // //   }


// // //   function Human(ad,soyad,yas,gozRengi){
// // //     this.ad=ad;
// // //     this.soyad=soyad;
// // //     this.yas=yas;
// // //     this.gozRengi=gozRengi;
// // //   }


// //   class Human2{
// //     constructor(ad,soyad,yas,gozrengi,seher){
// //         this.ad=ad;
// //         this.soyad=soyad;
// //         this.yas=yas;
// //         this.gozrengi=gozrengi;
// //         this.seher=seher;
       
// //     }

// //     get FullName(){
// //         return this.ad+" "+this.soyad;
// //     }
        
    
 
// //   }

// //   let person1=new Human2("Elvin","Memmedov",20,"qara",);
// //     console.log(person1.FullName);


// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   Person.prototype.nationality = "English";
  
//   const myFather = new Person("John", "Doe", 50, "blue");
// //   const myMother = new Person("Sally", "Rally", 48, "green");

// // myFather.nationality="Azerbaijani";
// console.log(myFather.nationality)


// console.log( Number.prototype.__proto__ .__proto__)