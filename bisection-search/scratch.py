x = 9
epsilon = 0.001
incr = 0.0001
high = 9
low = 0
ans = (high + low) / 2.0


while abs(ans**2 - x) >= epsilon:
    print("answer: ", ans)

    if ans**2 < x:
        low = ans

    if ans**2 > x:
        high = ans

    ans = (high + low) / 2.0
