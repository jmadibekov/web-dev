# https://codeforces.com/gym/103373/problem/D

if __name__ == "__main__":
    n = int(input())

    dp = [0.0] * (n + 1)
    dp[1] = 1.0
    for i in range(2, n):
        for j in range(1, i):
            dp[i] += (1 / i) * dp[j]

    ans = 0.0
    for i in range(1, n):
        ans += (1 / (n - 1)) * dp[i]

    print("{:.10}".format(ans))
