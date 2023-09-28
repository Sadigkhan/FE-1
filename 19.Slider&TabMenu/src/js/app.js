// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

// let images = [
//     "src/images/Draven_29.jpg",
//     "src/images/draven.jpeg",
//     "src/images/draven2.jpeg",
// ]

// let swiperWrapper = document.querySelector(".swiper-wrapper")
// let div = document.createElement("div")
// div.classList.add("swiper-slide")



// images.forEach((image)=>{
//     swiperWrapper.innerHTML +=`<div class="swiper-slide">
//         <img src="${image}" alt="">
//     </div>
//     `
// })


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })




// window.addEventListener("DOMContentLoaded",function(){
//     // let sliderImg=document.getElementById("sliderImg")
//     // let prevBtn=document.getElementById("prevBtn")
//     // let nextBtn=document.getElementById("nextBtn")
//     // let sliderContainer=document.querySelector(".slider-container")


//     // let images=[
//     //     "src/images/Draven_29.jpg",
//     //     "src/images/draven.jpeg",
//     //     "src/images/draven2.jpeg",
//     // ]

//     // let currentIndex=0;

//     // function Slider(){
//     //     if(currentIndex<0){
//     //         currentIndex=images.length-1
//     //     }else if(currentIndex>=images.length){
//     //         currentIndex=0
//     //     }
//     //     sliderImg.src=images[currentIndex]
//     // }


//     // prevBtn.addEventListener("click",function(){
//     //     currentIndex--
//     //     Slider()
//     // })
//     // nextBtn.addEventListener("click",function(){
//     //     currentIndex++
//     //     Slider()
//     // })


//     // let autoPlay=setInterval(function(){
//     //     currentIndex++
//     //     Slider()
//     // },2000)

//     // sliderContainer.addEventListener("mouseover",function(){
//     //     clearInterval(autoPlay)
//     // })

//     // sliderContainer.addEventListener("mouseout",function(){
//     //     autoPlay=setInterval(function(){
//     //         currentIndex++
//     //         Slider()
//     //     },2000)
//     // })
//     // AOS.init();


// })


window.addEventListener("DOMContentLoaded", function () {
    let tabs=document.querySelectorAll(".tabs div")
    let tabContents=document.querySelectorAll(".content div")

    for(let tab of tabs){
        tab.addEventListener("click",function(){
            let activeElement=document.querySelector(".active")
            activeElement.classList.remove("active")
            this.classList.add("active")

            let index=this.getAttribute("data-index")
            for(let content of tabContents){
                if(content.getAttribute("data-index")==index){
                    content.classList.add("show")
                }else{
                    content.classList.remove("show")
                }
            }
            // let tabId=this.getAttribute("data-tab")

            // for(let content of tabContents){
            //     content.classList.remove("active")
            // }
            // document.getElementById(tabId).classList.add("active")
        })
    }
})