function avoidObstacles(nums) {
    //  write code here.
    const sortedNums = nums.sort((a, b) => a - b);
    let passesEveryElementTest = false;
    let jump = 0;
    
    while (!passesEveryElementTest) {
      jump++;
      passesEveryElementTest = sortedNums.every(element => element % jump !== 0);
    }
    
    return jump;
}