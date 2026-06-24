const products = [
{
id:1,
name:"Laptop",
price:55000,
image:"https://picsum.photos/300?1"
},
{
id:2,
name:"Smartphone",
price:25000,
image:"https://picsum.photos/300?2"
},
{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/300?3"
},
{
id:4,
name:"Smart Watch",
price:5000,
image:"https://picsum.photos/300?4"
},
{
id:5,
name:"Keyboard",
price:1500,
image:"https://picsum.photos/300?5"
},
{
id:6,
name:"Gaming Mouse",
price:1200,
image:"https://picsum.photos/300?6"
}
];

displayProducts(products);

function displayProducts(data){

const container =
document.getElementById("products");

container.innerHTML="";

data.forEach(product=>{

container.innerHTML += `
<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>High Quality Product</p>

<div class="price">
₹${product.price}
</div>

<button onclick="addToCart('${product.name}')">
Add To Cart
</button>

</div>
`;

});
}

function searchProduct(){

const keyword =
document.getElementById("searchBox")
.value
.toLowerCase();

const filtered =
products.filter(product =>
product.name.toLowerCase()
.includes(keyword)
);

displayProducts(filtered);

}

function addToCart(product){

alert(product + " Added To Cart");

}
