n = int(input())
l = [int(i) for i in input().split()]
for i in range(n // 2):
    temp = l[i]
    l[i] = l[n - 1 - i]
    l[n - 1 - i] = temp
for i in range(n):
    print(l[i], end=" ")