def missing_char(str, n):
  s = str[:n]
  s += str[n + 1:]
  return s
