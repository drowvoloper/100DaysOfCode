function adjacentElementsProduct(nums) {
    let largestProduct = 0;
    const numArr = [...nums];
    let num1, num2, product;
    
    for (let i = 0; i < numArr.length - 1; i++) {
        product = numArr[i] * numArr[i+1];
        if (product > largestProduct) largestProduct = product;
    }
    
    return largestProduct;
}