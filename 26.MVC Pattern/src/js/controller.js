export default class Controller{
    constructor(model,view){
        this.model=model;
        this.view=view;
    }


    
    init() {
        // Burda view classında, buttonlara listenerləri asmaq üçün olan funksiyalara
        // controllerin içində olan metodları verirəm ki, buttonlar basilanda, burda
        // xəbərim olsun ki, modeli yenileyim, və view nu yeniləyim
        this.view.listenIncreaseButton(this.onIncrease.bind(this))
        // Burda funksiyaları bind olmadan ötürsək, onlar bu classın metodu
        // olduqlarını itirəcəklər, çünki kopiya kimi gedirlər o halda, amma
        // bind o kopiyaya context əlavə edir
        this.view.listenDecreaseButton(this.onDecrease.bind(this))
    }


    onIncrease(){
        this.model.increase();
        this.onUpdate()
    }

    onDecrease(){
        this.model.decrease();
        this.onUpdate()

    }
    onUpdate(){
        this.view.refreshDisplay(this.model.count)
    }

  
}