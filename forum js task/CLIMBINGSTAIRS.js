// function method 
function climbingStairs(costStairs) {
	
	let i = costStairs.length	
	if (i == 0) {
        return 0;
    
    }	
	let dp = new Array(costStairs.length);
	dp[i - 1] = costStairs[i - 1];

	if (i == 1) { 
        return dp[i - 1]; 
    }
	dp[i - 2] = Math.min(costStairs[i - 1] + costStairs[i - 2], costStairs[i - 2]);
    
	for (let j = i - 3; j >= 0; j--) {
		dp[j] = Math.min(dp[j + 1], dp[j + 2]) + costStairs[j];
	}

	return Math.min(dp[0], dp[1]);
}
//this is the driver for testing your code
console.log(climbingStairs([0, 2, 2, 1])); // ex 1
console.log(climbingStairs([0, 2, 3, 2])); // ex 2
// and so on....
