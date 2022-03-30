from operator import truediv


n = input()
first_zeroes = True

for i in range(len(n) - 1, -1, -1):
    if n[i] != '0':
        first_zeroes = False
    if first_zeroes == False:
        print(n[i], end="")