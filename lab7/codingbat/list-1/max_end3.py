def max_end3(nums):
  mx = max(nums[0], nums[-1])
  nums[0], nums[1], nums[-1] = mx, mx, mx
  return nums