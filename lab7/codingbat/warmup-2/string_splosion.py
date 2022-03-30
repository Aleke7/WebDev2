def string_splosion(str):
  s = ""
  p = ""
  for i in range(len(str)):
    s += str[i]
    p += s
  return p