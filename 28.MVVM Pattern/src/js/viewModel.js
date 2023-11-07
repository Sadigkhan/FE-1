export default class ViewModel{
  incBtn;
  decBtn;
  display;

  constructor(model){
    this.model=model
  }


  init(){
    this.incBtn=document.querySelector("#increase")
    this.decBtn=document.querySelector("#decrease")
    this.display=document.querySelector("#display")

    this.incBtn.addEventListener("click",this.increase.bind(this))
    this.decBtn.addEventListener("click",this.decrease.bind(this))
  }


  increase(){
    this.model.inc()
    this.updateDisplay()
  }

  decrease(){
    this.model.dec()
    this.updateDisplay()
  }

  updateDisplay(){
    this.display.value=this.model.count
  }

}