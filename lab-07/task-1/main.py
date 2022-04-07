def check_if_palindrome(s: str):
    return s == s[:: -1]


s = input()
print(check_if_palindrome(s))
