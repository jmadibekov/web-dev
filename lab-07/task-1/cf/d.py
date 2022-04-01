# https://codeforces.com/gym/103373/problem/A

if __name__ == "__main__":
    n = int(input())

    arr = []

    for i in range(n):
        s = input()
        elem = s.split()

        arr.append((int(elem[0]), int(elem[1]), int(elem[2]), " ".join(elem[3:])))

    arr.sort()

    print(arr[-1][-1])
