def count_hi(str):
  cnt = 0
  for i in range(len(str)):
    if str[i:i + 2] == "hi":
      cnt += 1
  return cnt