/*
 * Find out how long it would take for your balance to pass a specific
 * threshold with the asumption that you don't make any additional deposits.
 *
 *
 * Initial deposit: 100
 * Rate: 20
 * Threshold: 170
 *
 * Each year the amount of money increases by 20%.
 * 
*/

// My solution:

function depositProfit(deposit, rate, threshold) {
    //  write code here.
    let years = 0;
    let currentBalance = deposit;

    while (currentBalance < threshold) {
        currentBalance = currentBalance + currentBalance * 0.2;
        ++years;
    }

    return years;
}
