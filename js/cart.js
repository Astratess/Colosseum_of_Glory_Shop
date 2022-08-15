const cartMain = document.getElementById('shop-list')
const currentPrice = document.getElementById('price')
const order = document.getElementById('order-textarea')
const cartNum1 = document.getElementById('cart-num')
let orderText = ''
let cartItems1 = []
let cartPrice = 0
if (localStorage.getItem('cartItems') != null){
    cartItems1 = JSON.parse(localStorage.getItem('cartItems'))
}

const div = document.createElement('div')
div.classList.add('shop-list__inner')
cartMain.appendChild(div)
renderCartItems();
function renderCartItems (){
	let divInner = ''
	for (let i = 0; i < cartItems1.length; i++) {
		cartPrice = 0;
		for (let i = 0; i < cartItems1.length; i++) {
			cartPrice += cartItems1[i].price
		}
		orderText += `${cartItems1[i].name} + `;
		divInner += `
		<div class="grid">      
			<img src="${cartItems1[i].src}" alt="">

			<h4>${cartItems1[i].name}</h4>
			
			<div class="holder">
				<div class="box">
					<p>${cartItems1[i].price}$</p>
				</div><!-- /.price -->

				<div class="box buy remove" data-names="${cartItems1[i].name}" data-cost="${cartItems1[i].price}" data-src="${cartItems1[i].src}">
					<p>Remove Item</p>
				</div><!-- /.price -->
			</div> <!-- /. holder -->
		</div><!-- /.grid -->

		`
	}
	if(cartItems1.length === 0){
		cartPrice = 0;
		orderText = '';
	}
	div.innerHTML = divInner;
	removeItems();
	currentPrice.innerHTML = `Current price: ${cartPrice.toFixed(2)}$`
	cartNum1.innerHTML = cartItems1.length;
}

order.value = orderText + cartPrice.toFixed(2);
console.log(order.value)

document. getElementById("purchase-form").addEventListener("submit", ()=>{
	localStorage.removeItem('cartItems')
})

function removeItems (){
	const removes = document.querySelectorAll('.remove')

	removes.forEach(remove =>{
		remove.addEventListener('click', ()=>{
			for (let i = 0; i < cartItems1.length; i++) {
				if (cartItems1[i].name == remove.getAttribute('data-names')){
					cartItems1.splice(i, 1);
					break;
				}
			}
			localStorage.setItem('cartItems', JSON.stringify(cartItems1))
			renderCartItems();
		})
	})
}