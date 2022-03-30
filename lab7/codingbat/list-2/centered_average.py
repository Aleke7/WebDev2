def centered_average(nums):
  nums.sort()
  if len(nums) % 2 != 0:
    return nums[len(nums) // 2]
  return (nums[len(nums) // 2] + nums[len(nums) // 2 - 1]) / 2