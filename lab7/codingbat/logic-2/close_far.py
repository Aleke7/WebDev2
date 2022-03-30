def close_far(a, b, c):
  return (abs(b - a) <= 1 and abs(c - a) >= 2 and abs(c - b) >= 2) or (abs(c - a) <= 1  and abs(b - c) >= 2)
def close_far(a, b, c):
    a_b_diff = abs(a - b)
    a_c_diff = abs(a - c)
    b_c_diff = abs(b - c)
    return (
        (a_b_diff <= 1 and a_c_diff >= 2 and b_c_diff >= 2) !=
        (a_c_diff <= 1 and a_b_diff >= 2 and b_c_diff >= 2)
    )