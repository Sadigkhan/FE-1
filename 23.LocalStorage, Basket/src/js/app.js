if(localStorage.getItem("basket") == null){
    localStorage.setItem("basket", JSON.stringify([]))
    document.querySelector("#totalcount").innerHTML = 0;
    document.querySelector("#totalprice").innerHTML = 0;
}else{


    // let count = 0;
    // basket.forEach(element => {
    //     count += element.count
    // })
    // document.querySelector("#totalcount").innerHTML = count;


    let basket = JSON.parse(localStorage.getItem("basket"))
    console.log(basket.length)
    
    document.querySelector("#totalcount").innerHTML = basket.length;
    
    let price = 0

    basket.forEach(element => {
        price += Number(element.price)*Number(element.count)
    })

    document.querySelector("#totalprice").innerHTML = price;
}

fetch("db.json")
.then(res => res.json())
.then(data => {
    let html = ""
    data.products.forEach(item => {
        html += 
        `
        <div class="col-lg-3 custom-box">
            <div class="custom-card">
                <div class="img-div">
                    <img src="${item.image}" alt="">
                </div>
                <div class="content">
                    <h3 class="title">${item.name}</h3>
                    <h2 class="price">${item.price}$</h2>
                </div>
                <div class="addbasket-div">
                    <button data-id="${item.id}" data-price="${item.price}" class="addbasketbtn">Add to basket</button>
                </div>
            </div>
        </div>
        `
    })

    document.querySelector("#Products .container .row").innerHTML = html;


    let addBtns = document.querySelectorAll(".addbasketbtn");

    addBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            if(localStorage.getItem("basket") == null){
                localStorage.setItem("basket", JSON.stringify([]))
            }

            let basket = JSON.parse(localStorage.getItem("basket"))

            let data_id = btn.getAttribute("data-id");
            let data_price = Number(btn.getAttribute("data-price")).toFixed(2);

            let element = basket.find(a => {
                return a.id == btn.getAttribute("data-id")
            })

            if(element === undefined ){
                let item = {
                    id: data_id,
                    count: 1,
                    price: data_price
                }

                basket.push(item)
            }else{
                element.count++;
            }

            localStorage.setItem("basket", JSON.stringify(basket))

            document.querySelector("#totalcount").innerHTML = basket.length;
            let price = 0
            basket.forEach(element => {
                price += Number(element.price)*Number(element.count)
            })
            document.querySelector("#totalprice").innerHTML = price.toFixed(2);

        })
    })

    
})