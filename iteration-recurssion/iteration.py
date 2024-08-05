def iterPower(base, exp):
    """
    base: int or float.
    exp: int >= 0

    returns: int or float, base^exp
    """
    # Your code here
    result = 1

    for inc in range(exp):
        result *= base

    print(result)
    return result


def iterPowerWhile(base, exp):
    result = 1
    while exp > 0:
        result *= base
        exp -= 1

    print(result)
    return result


iterPower(2, 3)
iterPowerWhile(2, 3)
