def gdcRecur(a, b):
    if b == 0:
        print(a)
        return a
    else:
        gdcRecur(b, a % b)


gdcRecur(2, 3)
