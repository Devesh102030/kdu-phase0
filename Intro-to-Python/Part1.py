password = input("Enter the password: ")
confirmation = input("Enter the password again: ")

print("Length 1: ",len(password))
print("Length 2: ",len(confirmation))

# if(len(password) == len(confirmation)):
#     print("Lengths match: True")
# else:
#     print("Lengths match: False")

print("Lengths match: ", len(password) == len(confirmation))


# if(password == confirmation):
#     print("Strings match: True")
# else:
#     print("Strings match: false")


print("Strings match: ", password == confirmation)