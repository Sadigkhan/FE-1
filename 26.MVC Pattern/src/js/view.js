export default class View{
    constructor(){
        this.display=document.getElementById("display");
        this.increaseButton=document.getElementById("increaseButton");
        this.decreaseButton=document.getElementById("decreaseButton");
    }


    listenIncreaseButton(callback){
        this.increaseButton.onclick=function(){
            callback()
        }
    }

    listenDecreaseButton(callback){
        this.decreaseButton.onclick=function(){
            callback()
        }
    }


 
    refreshDisplay(value){
        this.display.value=value
    }
}