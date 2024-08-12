# A clever mathematical trick (due to Euclid) makes it easy to find greatest common divisors. Suppose that a and b are two positive integers:

# If b = 0, then the answer is a (BASE CASE)

# Otherwise, gcd(a, b) is the same as gcd(b, a % b)


def gdcRecur(a, b):
    if b == 0:
        print(a)
        return a
    else:
        gdcRecur(b, a % b)


gdcRecur(2, 3)
