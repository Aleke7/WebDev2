n = input()
m = 0
for i in range(len(n)):
    m += (2 ** (len(n) - 1 - i)) * int(n[i])
print(m)