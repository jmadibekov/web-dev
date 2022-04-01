# problem: https://codeforces.com/gym/102896/problem/K

if __name__ == "__main__":
    n = int(input())

    best_price = 10**9
    id = 0

    for i in range(n):
        line = input()
        [price, digits] = line.split()

        price = int(price)
        if digits.count("2") >= 2 and digits.count("1") >= 1 and digits.count("0") >= 1:
            if best_price > price:
                best_price = price
                id = i + 1

    print(id)
