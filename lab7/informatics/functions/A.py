l = [int(i) for i in input().split()]

def minimum(l):
    mn = 9999
    for i in range(len(l)):
        if mn > l[i]:
            mn = l[i]
    print(mn)

minimum(l)