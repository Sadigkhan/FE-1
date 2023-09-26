// let inp = document.querySelector('#passwordInp');
// let icon = document.querySelector('.password-div i');

// icon.addEventListener("click", function() {
//     if(inp.type === "password"){
//         inp.type = "text";
//         icon.className = "fa-solid fa-eye";
//     }else{
//         inp.type = "password";
//         icon.className = "fa-solid fa-eye-slash";
//     }
// })

// let input = document.querySelector('#passwordInp');
// let warning = document.querySelector('.warning-div');

// input.addEventListener("keydown", function(event) {
//     let isActivated = event.getModifierState("CapsLock");
//     if(isActivated) {
//         warning.style.display = "block";
//     }else{
//         warning.style.display = "none";
//     }
// })

// let prevent = document.querySelector('.prevent');

// prevent.addEventListener("click", function(event) {
//     event.preventDefault();
// })

// let input = document.querySelector('.sms-input');
// let smslength = document.querySelector('#smslength');
// let smscount = document.querySelector('#smscount');

// input.addEventListener("keyup", function() {
//     smslength.innerHTML = input.value.length;
//     smscount.innerHTML = Math.ceil(input.value.length / 160);
// });

let board = document.querySelector('#board');
let snake = document.querySelector('.snake');

window.onkeydown = function(event) {
    if(event.keyCode == 37){
        if(snake.offsetLeft > 0){
            snake.style.left = snake.offsetLeft - 10 + "px";
        }
    }else if(event.keyCode == 38){
        if(snake.offsetTop > 0){
            snake.style.top = snake.offsetTop - 10 + "px";
        }
    }else if(event.keyCode == 39){
        if(snake.offsetLeft < board.offsetWidth - snake.offsetWidth){
            snake.style.left = snake.offsetLeft + 10 + "px";
        }
    }else if(event.keyCode == 40){
        if(snake.offsetTop < board.offsetHeight - snake.offsetHeight){
            snake.style.top = snake.offsetTop + 10 + "px";
        }
    }
}