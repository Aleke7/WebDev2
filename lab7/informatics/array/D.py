n = int(input())
cnt = 0
l = [int(i) for i in input().split()]
for i in range(n - 1):
    if l[i] < l[i + 1]:
        cnt += 1
print(cnt)