import Model from "./model.js";
import Controller from "./controller.js";
import View from "./view.js";

function initialise(){
    let model=new Model()
    let view=new View()
    let controller=new Controller(model,view)
    controller.init()
}

window.addEventListener("DOMContentLoaded",initialise)


