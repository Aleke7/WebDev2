def lucky_sum(a, b, c):
  l = [a, b, c]
  sm = 0
  for i in l:
    if i == 13:
      break
    sm += i
  return sm