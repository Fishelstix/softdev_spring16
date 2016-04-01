import string

def minStrength(pw):
    charTypes = [0 if x in string.ascii_lowercase else 1 if x in string.ascii_uppercase else 2 if x in string.digits else 3 for x in pw]
    return (0 in charTypes) and (1 in charTypes) and (2 in charTypes)

def strength(pw):
    index = 0
    index += min(2,len([1 for x in pw if x in string.ascii_lowercase]))
    index += min(2,len([1 for x in pw if x in string.ascii_uppercase]))
    index += min(2,len([1 for x in pw if x in string.digits]))
    index += min(3,int(len(pw)/3))
    index += min(1,len([1 for x in pw if x in ".?!&#,;:-_*"]))
    return index
