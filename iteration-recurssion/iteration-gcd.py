def gcdIter(a, b):
    """
    a, b: positive integers

    returns: a positive integer, the greatest common divisor of a & b.
    """
    remainderA = 1
    remainderB = 1
    divisor = 0

    if a > b:
        divisor = b
    else:
        divisor = a

    print(divisor)

    while remainderA != 0 or remainderB != 0:
        remainderA = a % divisor
        remainderB = b % divisor

        print("Remainder A", remainderA)
        print("Remainder B", remainderB)

        print("Divisor: ", divisor)

        if remainderA != 0 or remainderB != 0:
            divisor -= 1

    print("Final divisor: ", divisor)
    return divisor


gcdIter(17, 12)
