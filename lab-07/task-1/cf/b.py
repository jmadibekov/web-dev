# problem: https://codeforces.com/gym/103373/problem/E

p, q = map(int, input().split())

bal = 0
minbal = 0
for d in range(1, 4000):
    bal -= p
    if bal < minbal:
        minbal = bal
    bal += q * (d**5)

x = -minbal

l = 1
r = 10**20
ans = -1
while l <= r:
    m = (l + r) // 2
    cur = (m**2) * ((m + 1) ** 2) * (2 * (m**2) + 2 * m - 1) * q // 12 - p * m + x
    if cur >= 10**99:
        ans = m
        r = m - 1
    else:
        l = m + 1

print(x)
print(ans)
