function sumOddFibonacciNumbers(num) {
    //  write code here.
    let sum = 2;
    let count = 0;
    let num1 = 1; 
    let num2 = 1;
    
    while (num1 <= num && num2 <= num) {
        num1 += num2;
        num2 += num1;
        
        if (num1 % 2 != 0 && num1 <= num) {
            sum += num1;
            console.log(num1);
        }
        if (num2 % 2 != 0 && num2 <= num) {
            sum += num2;
            console.log(num2);
        }
    }
    //console.log(sum);
    return sum;
}

sumOddFibonacciNumbers(10)