package main

import (
	"fmt"
)

func PredictTheWinner(nums []int) bool {
	var n = len(nums)

	var dp = make([][]int64, n, n)
	for i := 0; i < n; i++ {
		dp[i] = make([]int64, n, n)
	}

	var cumulativeSum = make([]int64, n, n)
	cumulativeSum[0] = int64(nums[0])
	for i := 1; i < n; i++ {
		cumulativeSum[i] = cumulativeSum[i-1] + int64(nums[i])
	}

	for i := 0; i < n; i++ {
		dp[i][i] = int64(nums[i])
	}

	for size := 2; size <= n; size++ {
		for i := 0; i <= n-size; i++ {
			for j := i + size - 1; j < n; j++ {
				// pick i
				op1 := int64(nums[i]) + cumulativeSum[j] - cumulativeSum[i+1] + int64(nums[i+1]) - dp[i+1][j]
				// pick j
				op2 := int64(nums[j]) + cumulativeSum[j-1] - cumulativeSum[i] + int64(nums[i]) - dp[i][j-1]
				if op1 > op2 {
					dp[i][j] = op1
				} else {
					dp[i][j] = op2
				}
			}
		}
	}

	fmt.Println(dp)
	fmt.Println(cumulativeSum)

	return dp[0][n-1] >= cumulativeSum[n-1]-dp[0][n-1]
}

func main() {
	fmt.Println(PredictTheWinner([]int{1, 3, 1}))
}
