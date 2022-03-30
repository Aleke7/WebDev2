import sys

a, b = int(input()), int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        sys.stdout.write(f"{i} ")
