export default class Model{
    constructor(){
        this.count=0;
    }
    increase(){
        this.count+=1;
    }

    decrease(){
        if(this.count<=0){
            this.count=0
        }else{
            this.count-=1;
        }
        
    }
    
}


