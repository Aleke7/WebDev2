n = int(input())
cnt = 0
l = [int(i) for i in input().split()]
for i in range(n):
    if l[i] > 0:
        cnt += 1
print(cnt)