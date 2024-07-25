# Secret number guesses

# User => Think of a numnber
# PC:
# Receive input L or H telling if its too low or to high
# Try again with new avg


high = 100
low = 0
avg = (high + low) / 2
user_input = None

print("Think of a number btwn 0 and 100")

while True:
    print(f"Is your secret number {avg}")
    user_input = input()

    if user_input == "h":
        high = int(avg)

    if user_input == "l":
        low = int(avg)

    if user_input == "c":
        print(f"You secret number is {avg}")
        break

    avg = int((high + low) / 2)
