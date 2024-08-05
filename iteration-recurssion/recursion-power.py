def recurPower(base, exp):
    """
    Concept: Multiplying base by itelself exp times
    """
    if exp == 1:
        return base
    else:
        return base * recurPower(base, exp - 1)


print(recurPower(2, 4))
