// to add or remove I-phone's in a cart

function handleProductChange(product, ifIncrease) {
  const ProductQuantity = getProductInput(product);
  let changeProductQuantity = ProductQuantity;
  if (ifIncrease == false && ProductQuantity > 1) {
    changeProductQuantity = ProductQuantity - 1;
  }
  if (ifIncrease == true) {
    changeProductQuantity = ProductQuantity + 1;
  }
  document.getElementById(product + "_count").value = changeProductQuantity;
  let totalProductAmount = 0;
  if (product == "phone") {
    totalProductAmount = changeProductQuantity * 1219;
  }
  if (product == "case") {
    totalProductAmount = changeProductQuantity * 59;
  }
  document.getElementById(product + "_amount").innerText =
    "$" + totalProductAmount;
  calculateTotal();
}

function calculateTotal() {
  const phoneCount = getProductInput("phone");
  const caseCount = getProductInput("case");
  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total_price").innerText = "$" + totalPrice;
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax").innerText = '$' + tax;
  const grandPrice = totalPrice + tax;
  document.getElementById("grand_price").innerText = '$' + grandPrice;
}

function getProductInput(product) {
  const productInput = document.getElementById(product + "_count");
  const productCount = parseInt(productInput.value);
  return productCount;
}
// function handleProductChange(product, isIncrease) {
//     let productNum = document.getElementById('productCount')
//     const ProductQuantity = parseInt(productNum.value)
//     let changePhoneQuantity = ProductQuantity
//     if (isIncrease == false && ProductQuantity > 1) {
//         changePhoneQuantity = ProductQuantity - 1
//     }
//     if (isIncrease == true) {
//         changePhoneQuantity = ProductQuantity + 1
//     }
//     productNum.value = changePhoneQuantity
//     let productAmount = document.getElementById('productAmount')
//     let totalProductAmount = changePhoneQuantity * 1219
//     productAmount.innerText = '$' + totalProductAmount}

//  function handlePhoneChange(isIncrease) {
//     let productNum = document.getElementById('productCount')
//     const ProductQuantity = parseInt(productNum.value)
//     let changePhoneQuantity = ProductQuantity
//     if (isIncrease == false && ProductQuantity > 1) {
//         changePhoneQuantity = ProductQuantity - 1
//     }
//     if (isIncrease == true) {
//         changePhoneQuantity = ProductQuantity + 1
//     }
//     productNum.value = changePhoneQuantity
//     let productAmount = document.getElementById('productAmount')
//     let totalProductAmount = changePhoneQuantity * 1219
//     productAmount.innerText = '$' + totalProductAmount}
// // to add or remove phone case in cart
// function handleCaseChange(ifIncrease) {
//         let caseNum = document.getElementById('case_count')
//         let changeCaseCount = parseInt(caseNum.value)
//         let changeCaseQuantity = changeCaseCount
//         if (ifIncrease == false && changeCaseCount > 1) {
//             changeCaseQuantity = changeCaseCount - 1}
//         if (ifIncrease == true) {
//             changeCaseQuantity = changeCaseCount + 1}
//         caseNum.value = changeCaseQuantity
//         let caseQuantity = document.getElementById('caseAmount')
//         const newCaseAmount = changeCaseQuantity * 59
//         caseQuantity.innerText = '$' + newCaseAmount
// }

// document.getElementById('remove_case').addEventListener('click', function () {
//     let caseNum = document.getElementById('case_count')
//     let changeCaseCount = parseInt(caseNum.value)
//     let addCaseQuantity = changeCaseCount - 1
//     caseNum.value = addCaseQuantity
//     // to subtract phone case amount in the cart
//     let caseQuantity = document.getElementById('caseAmount')
//     const newCaseAmount = addCaseQuantity * 59
//     caseQuantity.innerText = '$' + newCaseAmount})

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
