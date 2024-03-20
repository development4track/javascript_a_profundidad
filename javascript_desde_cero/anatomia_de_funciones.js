function calculateDiscountedPrice (price, discount){
    const discount_funct = (price * discount) / 100
    const priceWithDiscount = price - discount_funct
    return priceWithDiscount
}

let price = 100
let discount = 20
let finalPrice = calculateDiscountedPrice(price,discount)
console.log(`Final price $` + finalPrice)