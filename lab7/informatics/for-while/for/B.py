import sys

a, b, c, d = int(input()), int(input()), int(input()), int(input())
for i in range(a, b + 1):
    if i % d == c:
        sys.stdout.write(f"{i} ")