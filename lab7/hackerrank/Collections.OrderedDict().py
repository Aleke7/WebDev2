d = {}
N = int(input())
while N > 0:
    s = input().split()
    name = " ".join(s[:-1])
    price = int(s[-1])
    if name not in d:
        d[name] = price
    else:
        d[name] += price
    N -= 1
    
for i in d:
    print(f"{i} {d[i]}")