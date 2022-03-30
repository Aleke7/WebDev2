x, y = map(int, input().split())
def xor(x, y):
    if x != y:
        return 1
    else:
        return 0

print(xor(x, y))