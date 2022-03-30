if __name__ == '__main__':
    N = int(input())
    l = [];
    while N > 0:
        command = input().split()
        if command[0] == "insert":
            ind, val = int(command[1]), int(command[2])
            l.insert(ind, val)
        if command[0] == "print":
            print(l)
        if command[0] == "remove":
            val = int(command[1])
            l.remove(val)
        if command[0] == "append":
            val = int(command[1])
            l.append(val)
        if command[0] == "sort":
            l.sort()
        if command[0] == "pop":
            l.pop()
        if command[0] == "reverse":
            l.reverse()
        N -= 1
            
    
