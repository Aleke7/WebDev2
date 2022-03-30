def sum67(nums):
  ignore = False
  sm = 0
  for i in range(len(nums)):
    if nums[i] == 6:
      ignore = True
    if not ignore:
      sm += nums[i]
    if nums[i] == 7:
      ignore = False
  return sm