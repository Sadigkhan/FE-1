// // bir funkisiyanin asinxron teyin etmek  ucun async yaziriq
// // async yazdigimiz zaman bu funksiya mutleq promise qaytarir

// async function myAsyncFunction() {
//     // asinxronluq burada baslayir
//     console.log("asinxronluq basladi")
//     return "Netice olaraq promise qayidir"; // Bu netice bir Promise qaytarir
// }

// // async funksiyalarin icinde await yazdigimiz zaman funksiya promise qaytarmalidir
// // await yazdigimiz zaman funksiya bitene qeder kodlarin islemesini dayandirir


// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {   // resolveAfter2Seconds funksiyasi promise qaytarir 
//                                         //asagidaki kod blokunda await yazdigimiz ucun bu funksiya promise qaytarmalidir
//       setTimeout(() => {
//         resolve('oxundu');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result); // result 2 saniye sonra resolved olur, ve ekrana resolved yazilir.
//                         //await yazdigmiz funksiya tamamlanana qeder asagidaki kodlar islemir
//     console.log("asinxronluq bitdi")

//   }

//   asyncCall();


// const listOfIngredients = [];
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       console.log(response)
//       const data = await response.json();
//       console.log(data)
//       listOfIngredients.push(data);
//       console.log(listOfIngredients);
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }

//   fetchData();

// function Show(){
//     try{
//         setTimeout(()=>{
//             new Error("vusal")
//         },2000)
//     }catch (err){
//          console.log(err)
//     }
// }
// let err=new Error("vusal")
// console.log(typeof err)

// Show()


console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000);
console.log(3)
setTimeout(() => {
    console.log(4)
    setTimeout(() => {
        console.log(5)
    }, 1000);
    new Promise((resolve, reject) => {
        console.log(6)
        resolve()
    }).then(() => {
        console.log(7)
    })
}, 0);
new Promise((resolve, reject) => {
    console.log(8)
    resolve()
}).then(() => {
    console.log(9)
})
console.log(10)