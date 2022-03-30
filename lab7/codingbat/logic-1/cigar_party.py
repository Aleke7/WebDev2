def cigar_party(cigars, is_weekend):
  if(is_weekend and cigars >= 40):
    return True
  return 40 <= cigars <= 60