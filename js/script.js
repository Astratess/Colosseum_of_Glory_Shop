const addToCart = document.querySelectorAll('.add_to_cart')
const cartNum = document.getElementById('cart-num')
let cartItems = [];
if (localStorage.getItem('cartItems') != null){
    cartItems = JSON.parse(localStorage.getItem('cartItems'))
    console.log(cartItems)
}
cartNum.innerHTML = cartItems.length;

addToCart.forEach(cart_button =>{
    cart_button.addEventListener('click',()=>{
        let item = {
            name: '',
            price: 0,
            src: ''
        }
        item.name = cart_button.getAttribute('data-names')
        item.price = Number(cart_button.getAttribute('data-cost'))
        item.src = cart_button.getAttribute('data-src')
        cartItems.push(item)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        cartNum.innerHTML = cartItems.length;
    })
})


/* ------------------------------------------------*\
                     Carousel
\* ------------------------------------------------*/

const slides = document.getElementsByClassName('image');
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('image-hidden');
    }
}

setInterval(() => {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("active");
    slides[slidePosition].style.animation = "fadeInNext 1s ease-in-out forwards"
  }, "10000")