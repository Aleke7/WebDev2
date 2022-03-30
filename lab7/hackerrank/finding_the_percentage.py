if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        sm = scores[0] + scores[1] + scores[2]
        student_marks[name] = sm / 3
    query_name = input()
    print("{:.2f}".format(student_marks[query_name]))