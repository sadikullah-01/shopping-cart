// to add or remove I-phone's in a cart
// to remove  product in cart

// document.getElementById('minus_product').addEventListener('click', function () {
//     handleProductChange(false)
// })

//     handleProductChange(true)
// })
function handleProductChange(isIncrease) {
    let productNum = document.getElementById('productCount')
    const ProductQuantity = parseInt(productNum.value)
    let changeProductQuantity = ProductQuantity
    if (isIncrease == false) {
        changeProductQuantity = ProductQuantity - 1}
    if (isIncrease == true) {
        changeProductQuantity = ProductQuantity + 1}
    productNum.value = changeProductQuantity
    let productAmount = document.getElementById('productAmount')
    let totalProductAmount = changeProductQuantity * 1219
    productAmount.innerText = '$' + totalProductAmount
}
// document.getElementById('removePhoneCart').addEventListener('click', function () {
//     let totalCart = document.getElementById('cartphone')
//     totalCart.style.display = 'none'
// })

/**
//1st step : call the minus button
document.getElementById('minus_product').addEventListener('click', function () {
    // 2nd step : call the product number field
    let productNum = document.getElementById('productCount')
    // 3rd step: access the product quantity field
    const ProductQuantity = parseInt(productNum.value)
    // 4th step: subtract the Product Quantity
    const subtractProductQuantity = ProductQuantity - 1
    // 5 th step: update the value
    productNum.value = subtractProductQuantity
    // 6. subtract amount
    let productAmount = document.getElementById('productAmount')
    let totalProductAmount = subtractProductQuantity * 1219
    productAmount.innerText = '$' + totalProductAmount
})

// to add the product in cart
document.getElementById('add_product').addEventListener('click', function () {
    //  call the product number field
    let productNum = document.getElementById('productCount')
    // access the product quantity field
    const ProductQuantity = parseInt(productNum.value)
    // add the product quantity
    const addProductQuantity  = ProductQuantity + 1
    productNum.value = addProductQuantity
    // add amount
    let productAmount = document.getElementById('productAmount')
    let totalProductAmount = addProductQuantity * 1219
    productAmount.innerText = '$' + totalProductAmount
})
document.getElementById('removePhoneCart').addEventListener('click', function () {
    let totalCart = document.getElementById('cartphone')
    totalCart.style.display = 'none'
})
 */
// to add or remove phone cover in the cart
