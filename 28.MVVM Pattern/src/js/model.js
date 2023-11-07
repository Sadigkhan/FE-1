export default class Model{
  #count=0
  inc(){
    this.#count+=1;
  }

  dec(){
    if(this.#count<=0){
      this.#count=0
    }else{
      this.#count-=1;
    }
  }

  get count(){
    return this.#count
  }

}