def cat_dog(str):
  cat_cnt = 0
  dog_cnt = 0
  for i in range(len(str)):
    if str[i:i + 3] == "cat":
      cat_cnt += 1
    if str[i:i + 3] == "dog":
      dog_cnt += 1
  if cat_cnt == dog_cnt:
    return True
  return False