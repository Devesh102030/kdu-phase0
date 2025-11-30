genres = []
uniqueGenres = set()
genresCount = {}


for i in range(10):
    temp = input()
    genres.append(temp)
    uniqueGenres.add(temp)

    if temp in genresCount:
        genresCount[temp] += 1
    else:
        genresCount[temp] = 1


print("List: ", genres)
print("Set: ", uniqueGenres)
print("Dictionary: ",genresCount)


