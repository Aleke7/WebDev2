if __name__ == '__main__':
    l = []
    names = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        l.append([name, score])
    l = sorted(l, key=lambda x: x[1])
    mn = l[0][1]
    smn = None
    for i in range(len(l)):
        if l[i][1] != mn:
            smn = l[i][1]
            break
    for i in range(len(l)):
        if l[i][1] == smn:
            names.append(l[i][0])
    names.sort()
    for i in names:
        print(i)