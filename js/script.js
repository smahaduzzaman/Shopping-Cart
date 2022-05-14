function handleProductChange(product, isIncrease) {

    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;

    if (isIncrease == true) {
        newProductCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        newProductCount = productCount - 1;
    }

    productInput.value = newProductCount;

    let productTotal;
    if (product == 'laptop') {
        productTotal = newProductCount * 240000;
    } else {
        productTotal = newProductCount * 170000;
    }

    document.getElementById(product + '-total').innerText = productTotal;
    handleCheckOut()
}

function handleCheckOut() {

    const laptopCount = document.getElementById('laptop-count').value;
    const phoneCount = document.getElementById('phone-count').value;

    const totalPrice = parseInt(laptopCount) * 240000 + parseInt(phoneCount) * 170000;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;

}

function checkOut() {
    alert('Thank you for purchase our products');
    location.reload();
}