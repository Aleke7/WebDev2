def end_other(a, b):
  mn = min(len(a), len(b))
  return a.lower()[-mn:] == b.lower()[-mn:]