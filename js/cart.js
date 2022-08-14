const cartMain = document.getElementById('shop-list__inner')
const currentPrice = document.getElementById('price')
const order = document.getElementById('order-textarea')
const clearAll = document.getElementById('clear-all')
let orderText = ''
let cartItems1 = []
let cartPrice = 0
if (localStorage.getItem('cartItems') != null){
    cartItems1 = JSON.parse(localStorage.getItem('cartItems'))
}

for (let i = 0; i < cartItems1.length; i++) {
	const div = document.createElement('div')
	cartPrice = 0;
	for (let i = 0; i < cartItems1.length; i++) {
		cartPrice += cartItems1[i].price
	}
	orderText += `${cartItems1[i].name} + `;
	currentPrice.innerHTML = `Current price: ${cartPrice.toFixed(2)}$`
	cartMain.appendChild(div)
	div.classList.add('grid')
	div.innerHTML = `
	<img src="${cartItems1[i].src}" alt="">

	<h4>${cartItems1[i].name}</h4>
	
	<div class="box">
		<p>${cartItems1[i].price}$</p>
	</div><!-- /.price -->`   
}
order.value = orderText + cartPrice.toFixed(2);
console.log(order.value)

clearAll.addEventListener('click', ()=>{
	localStorage.removeItem('cartItems')
})