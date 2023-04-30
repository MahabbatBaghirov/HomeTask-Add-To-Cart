let products = [
    {
        id: 1,
        name: "Iphone 14",
        imgURL: "https://bytelecom.az/media/2022/10/01/product_images/12614/black1.webp",
        price: 1400,
        desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempore.",
    },
    {
        id: 2,
        name: "Iphone 12",
        imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",
        price: 1200,
        desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempore."
    },
    {
        id: 3,
        name: "Iphone 11",
        imgURL: "https://irshad.az/resized/fit540x550/center/products/68844/11-black.jpeg",
        price: 1100,
        desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempore."
    },
    {
        id: 4,
        name: "Iphone X",
        imgURL: "https://cdn.shopify.com/s/files/1/0599/5413/5239/products/iphone-xs-max-517547_2048x2048.jpg?v=1674907123",
        price: 1000,
        desc: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempore."
    }
]


let productsWrapper = document.querySelector(".products-wrapper");

document.addEventListener("DOMContentLoaded",()=>{
    products.forEach((product)=>{
        productsWrapper.innerHTML += `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.imgURL}" alt="${product.name}">
            <div class="card-body">
              <h6 class="card-title"><span>Name:</span> <span id="name">${product.name}</span></h6>
              <p class="card-text"><span>Price:</span> <span id="price">${product.price}</span> <span>$</span></p>
              <p class="card-text"><span>Description:</span> <span id="desc">${product.desc}</span></p>
              <button id="${product.id}" class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
          </div>
    </div>`
    })
    let addToCart = document.querySelectorAll(".add-to-cart");
    [...addToCart].map((btn,id)=>{
        btn.addEventListener("click",(e)=>{
            if (localStorage.getItem("products")) {
                const productStore = JSON.parse(localStorage.getItem("products"))
                productStore.push(products[id]);
                localStorage.setItem("products",JSON.stringify(productStore));
            }
            else {
                localStorage.setItem("products",JSON.stringify([{...products[id],count:1}]))
            }
        })
    })
})

let tableBody = document.querySelector(".table-body");

JSON.parse(localStorage.getItem("products")).map((product)=>{
    tableBody.innerHTML += `<tr>
                        <th scope="row">${product.id}</th>
                        <td><img src="${product.imgURL}" alt="${product.name}"></td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td id="total">34AZN</td>
                        <td id="count">1</td>
                        <td><button id="Increase">+</button><button id="decrease">-</button></td>
                        <td><i class="fa-solid fa-trash"></i></td>
                      </tr>`
})

let increaseBtn = document.querySelectorAll(".increase");
let decreaseBtn = document.querySelectorAll(".decrease");
let count = document.querySelectorAll("#count");
let total = document.querySelector("#total")

increaseBtn.addEventListener("click",()=>{
    count = Number(++count)
})