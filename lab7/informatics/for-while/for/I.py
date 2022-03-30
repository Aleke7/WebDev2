import math
x = int(input())
cnt = 0
for i in range(2, int(math.sqrt(x)) + 1):
    if x % i == 0:
       cnt += 2
print(cnt) 