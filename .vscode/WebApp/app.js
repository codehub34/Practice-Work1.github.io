


let count = 0;
const cartUpdateElement = document.getElementById('UpdateCart');
const Cart = document.getElementById('cart');

function cartUpdate(){
    count++;
    cartUpdateElement.innerHTML = `${count}`
}
document.getElementById('order-cart').addEventListener('click', function() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '1000';
    popup.style.width = '400px';
    popup.style.height = '200px'
    popup.innerHTML = `You have ${count} items in your cart.`;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });

    popup.appendChild(closeButton);
    document.body.appendChild(popup);
});


