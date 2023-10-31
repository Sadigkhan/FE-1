let row = document.querySelector("#All-prods .container .row")
let productHTML = " ";



if(localStorage.getItem("basket")){
    console.log(true)
}else{
    localStorage.setItem("basket",JSON.stringify([]))
}

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            productHTML += `
       <div class="col-lg-4">
                    <div class="top">
                        <img style="width: 50%;" src="${product.image}" alt="">
                    </div>
                    <div class="bottom">
                        <h5>${product.category}</h5>
                        <h1>${product.title}</h1>
                        <p>${product.description.substring(0,50)}</p>
                        <h1>${product.price}</h1>
                    </div>
                <button data-id="${product.id}" class="bg-primary addBasket">Add Basket</button>
        </div>
       `
        });
        row.innerHTML = productHTML
        let addBtns = document.querySelectorAll(".addBasket")
        let basket=JSON.parse(localStorage.getItem("basket"))
        let prodId;
        addBtns.forEach(btn=>{
            btn.addEventListener("click",function(e){
                prodId=e.target.getAttribute("data-id")
                let product=data.find(item=>item.id==prodId)
                const { id,price,title,image }=product
                let exist=basket.find(exst=>exst.id==prodId)
                if(exist){
                    exist.count++
                }else{
                    basket.push({
                        id,
                        price,
                        title,
                        image,
                        count:1
                    })
                }
                
                localStorage.setItem("basket",JSON.stringify(basket))
            })
        })


    })