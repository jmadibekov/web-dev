# https://codeforces.com/gym/103081/problem/A


def read_line():
    return [int(x) for x in input().split()]


if __name__ == "__main__":
    n, k = read_line()
    dict = {}

    for i in range(3 * n):
        s = input()
        if s not in dict:
            dict[s] = [0, i]
        dict[s][0] += 1
        dict[s][1] = i

    arr = list(dict.items())

    arr.sort(key=lambda x: (-x[1][0], -x[1][1]))

    # print(arr)

    for i in range(min(k, len(arr))):
        print(arr[i][0])
