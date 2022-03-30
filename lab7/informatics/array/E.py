n = int(input())
l = [int(i) for i in input().split()]
check = False
for i in range(1, n - 1):
    if (l[i] < 0 and l[i - 1] < 0 and l[i + 1] < 0) or (l[i] > 0 and l[i - 1] > 0 and l[i + 1] > 0):
        check = True
        break
if check:
    print("YES")
else:
    print("NO") 