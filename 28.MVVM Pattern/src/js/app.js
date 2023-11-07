import Model from "./model.js"
import ViewModel from "./viewModel.js"

function initialise(){
  let viewModel = new ViewModel(new Model())
  viewModel.init()

}

window.addEventListener("DOMContentLoaded",initialise)