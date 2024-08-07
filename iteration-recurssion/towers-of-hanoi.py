def pm(start, end):
    print(start, " -> ", end)


def hanoi(n, start, end):
    other = 6 - (start + end)  # Defining the intermediary rod

    if n == 1:
        pm(start, end)
    else:
        # Move the smaller disk(s) that are above the big one to the intermediary rod
        hanoi(n - 1, start, other)
        # Move the BIG disk, from start to end
        pm(start, end)
        # Move the disk(s) that where moved to the other to the end rod
        hanoi(n - 1, other, end)


hanoi(4, 1, 3)
